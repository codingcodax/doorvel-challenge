import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { useTheme } from '~/hooks';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      aria-label='toggle theme'
      sx={{ borderRadius: 0, color: 'text.primary' }}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

export default ToggleTheme;
