import { Box } from '@mui/material';

import { useMobileSize } from '~/hooks';

type Props = {
  children: React.ReactNode;
};

const NavBar = ({ children }: Props) => {
  const isMobileSize = useMobileSize();

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
