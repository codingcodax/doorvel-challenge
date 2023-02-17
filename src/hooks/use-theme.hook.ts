import { useContext } from 'react';

import { ColorModeContext } from '~/contexts/ColorModeProvider';

const useTheme = () => {
  const { theme, toggleColorMode: toggleTheme } = useContext(ColorModeContext);

  return { theme, toggleTheme };
};

export default useTheme;
