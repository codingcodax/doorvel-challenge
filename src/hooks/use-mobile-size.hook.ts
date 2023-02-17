import { useMediaQuery } from '@mui/material';

const useMobileSize = () => {
  const isMobileSize = useMediaQuery('(max-width:600px)');

  return isMobileSize;
};

export default useMobileSize;
