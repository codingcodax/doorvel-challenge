import type { NextPage } from 'next';
import { Container, Button, Typography, Box } from '@mui/material';

import { Link } from '~/components/ui';
import { useMediaQuery } from '~/hooks';

const Custom404: NextPage = () => {
  const [isMobileSize, isTabletSize] = useMediaQuery();

  return (
    <Container
      maxWidth='lg'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box fontWeight='bold' textAlign='center'>
        <Typography
          fontSize={isTabletSize ? 150 : 250}
          lineHeight='1'
          variant='h1'
        >
          404
        </Typography>
        <Typography variant={isTabletSize ? 'h2' : 'h1'}>
          We couldn&apos;t find this page.
        </Typography>
      </Box>
      <Button
        component={Link}
        href='/'
        size='large'
        sx={{ mt: isMobileSize ? 4 : 8, borderRadius: 0, boxShadow: 'none' }}
        variant='contained'
      >
        Go home
      </Button>
    </Container>
  );
};

export default Custom404;
