import { useMediaQuery } from '@mui/material';

const useIsMobileSize = () => {
  const isMobileSize = useMediaQuery('(max-width:600px)');

  return isMobileSize;
};

export default useIsMobileSize;
