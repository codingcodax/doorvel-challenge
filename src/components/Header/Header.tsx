import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box pt={1}>
      <Typography
        component='h1'
        fontSize={20}
        fontWeight='bold'
        textAlign='center'
      >
        Cat Amenities
      </Typography>
    </Box>
  );
};

export default Header;
