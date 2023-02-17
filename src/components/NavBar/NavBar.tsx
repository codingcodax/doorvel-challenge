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
      gap={1}
      gridTemplateColumns={`${isMobileSize ? '' : 'auto'} auto 1fr`}
      mb={4}
    >
      {children}
    </Box>
  );
};

export default NavBar;
