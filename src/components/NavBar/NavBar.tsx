import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

const NavBar = ({ children }: Props) => {
  return (
    <Box
      alignItems='center'
      display='grid'
      gridTemplateColumns='1fr auto 1fr'
      mb={1}
    >
      {children}
    </Box>
  );
};

export default NavBar;
