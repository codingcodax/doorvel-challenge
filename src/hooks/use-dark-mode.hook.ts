import { useMediaQuery } from '@mui/material';

const useDarkMode = () => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return isDarkMode;
};

export default useDarkMode;
