import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component='footer' pb={1}>
      <Typography textAlign='center'>
        Website built by{' '}
        <Link
          href='https://www.codingcodax.dev/'
          rel='noopener noreferrer'
          target='_blank'
        >
          @codingcodax
        </Link>{' '}
        for Doorvel challenge
      </Typography>
    </Box>
  );
};

export default Footer;
