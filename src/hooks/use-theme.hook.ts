import { useContext } from 'react';

import { ColorModeContext } from '~/contexts/ColorModeProvider';

const useTheme = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  const theme = 'light';

  const toggleTheme = () => {
    toggleColorMode();
  };

  return [theme, toggleTheme];
};

export default useTheme;
