import { Container, Grid, Typography } from '@mui/material';

import { LogoIcon } from '~/components/icons';

import { Link } from '../ui';

const Header = () => {
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        alignItems='center'
        direction='row'
        justifyContent='center'
        mb={2}
        pt={1}
      >
        <LogoIcon />
        <Typography
          component='h1'
          fontSize={20}
          fontWeight='bold'
          lineHeight='1'
          ml={2}
        >
          <Link
            noLinkStyle
            href='/'
            sx={{ color: '#000', textDecoration: 'none' }}
          >
            Cat Amenities
          </Link>
        </Typography>
      </Grid>
    </Container>
  );
};

export default Header;
