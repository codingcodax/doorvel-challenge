import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button, IconButton, useMediaQuery } from '@mui/material';

import { Link } from '~/components/ui';

type Props = {
  href: string;
};

const GoBack = ({ href }: Props) => {
  const matches = useMediaQuery('(max-width:600px)');
  if (matches)
    return (
      <IconButton
        aria-label='go back'
        color='primary'
        component={Link}
        href={href}
      >
        <KeyboardArrowLeft />
      </IconButton>
    );

  return (
    <Button
      component={Link}
      href={href}
      startIcon={<KeyboardArrowLeft />}
      sx={{ justifySelf: 'start' }}
    >
      Go Back
    </Button>
  );
};

export default GoBack;
