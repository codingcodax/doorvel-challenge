import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

import { Link } from '~/components/ui';
import { useMobileSize } from '~/hooks';

type Props = {
  href: string;
};

const GoBack = ({ href }: Props) => {
  const isMobileSize = useMobileSize();

  if (isMobileSize)
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
