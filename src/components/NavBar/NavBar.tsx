import { Box } from '@mui/material';

import { useMediaQuery } from '~/hooks';

type Props = {
  children: React.ReactNode;
};

const NavBar = ({ children }: Props) => {
  const [, isTabletSize] = useMediaQuery();

  return (
    <Box
      alignItems='center'
      display='grid'
      gap={1}
      gridTemplateColumns={`${isTabletSize ? '' : 'auto'} auto 1fr`}
      mb={4}
    >
      {children}
    </Box>
  );
};

export default NavBar;
