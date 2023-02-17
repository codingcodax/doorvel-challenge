import { Container, Box, Typography } from '@mui/material';

import { LogoIcon } from '~/components/icons';
import { ToggleTheme } from '~/components';

import { Link } from '../ui';

const Header = () => {
  return (
    <Container maxWidth='lg'>
      <Box
        alignItems='center'
        display='flex'
        justifyContent='space-between'
        mb={2}
        pt={1}
      >
        <Box alignItems='center' display='flex'>
          <LogoIcon />
          <Typography component='h1' fontSize={20} fontWeight='bold' ml={2}>
            <Link
              noLinkStyle
              href='/'
              sx={{ color: 'text.primary', textDecoration: 'none' }}
            >
              Cat Amenities
            </Link>
          </Typography>
        </Box>

        <ToggleTheme />
      </Box>
    </Container>
  );
};

export default Header;
