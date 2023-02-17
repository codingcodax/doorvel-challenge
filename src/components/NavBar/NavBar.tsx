import { Box, useMediaQuery } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

const NavBar = ({ children }: Props) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <Box
      alignItems='center'
      display='grid'
      gridTemplateColumns={`${matches ? '' : 'auto'} auto 1fr`}
      mb={1}
    >
      {children}
    </Box>
  );
};

export default NavBar;
