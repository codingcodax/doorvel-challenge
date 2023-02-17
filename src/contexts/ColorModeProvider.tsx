import { createContext, useEffect, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { get, set } from 'local-storage';

import getDesignTokens from '~/styles/theme';
import { useDarkMode } from '~/hooks';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = createContext({
  theme: '',
  toggleColorMode: () => { },
});

type Props = {
  children: React.ReactNode;
};

const themeFromLocalStorage: 'light' | 'dark' | undefined = get('theme');

const ColorModeProvider = ({ children }: Props) => {
  const isDarkMode = useDarkMode();
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      theme: mode,
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        set('theme', mode === 'light' ? 'dark' : 'light');
      },
    }),
    [mode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    if (!themeFromLocalStorage) {
      const theme = isDarkMode ? 'dark' : 'light';
      setMode(theme);
      set('theme', theme);
      return;
    }

    setMode(themeFromLocalStorage);
  }, [isDarkMode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
