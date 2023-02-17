import { useMediaQuery as useMediaQueryMUI } from '@mui/material';

const useMediaQuery = () => {
  const isMobileSize = useMediaQueryMUI('(max-width:500px)');
  const isTabletSize = useMediaQueryMUI('(max-width:768px)');
  const isLaptopSize = useMediaQueryMUI('(max-width:1024px)');
  const isDesktopSize = useMediaQueryMUI('(max-width:1280px)');

  return [isMobileSize, isTabletSize, isLaptopSize, isDesktopSize];
};

export default useMediaQuery;
