import { Box } from '@mui/material';

import { useIsMobileSize } from '~/hooks';

type Props = {
  children: React.ReactNode;
};

const NavBar = ({ children }: Props) => {
  const isMobileSize = useIsMobileSize();

  return (
    <Box
      alignItems='center'
      display='grid'
      gridTemplateColumns={`${isMobileSize ? '' : 'auto'} auto 1fr`}
      mb={1}
    >
      {children}
    </Box>
  );
};

export default NavBar;
