import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

import { Link } from '~/components/ui';
import { useMediaQuery } from '~/hooks';

type Props = {
  href: string;
};

const GoBack = ({ href }: Props) => {
  const [isMobileSize] = useMediaQuery();

  if (isMobileSize)
    return (
      <IconButton
        aria-label='go back'
        color='primary'
        component={Link}
        href={href}
        sx={{ borderRadius: 0 }}
      >
        <KeyboardArrowLeft />
      </IconButton>
    );

  return (
    <Button
      component={Link}
      href={href}
      size='small'
      startIcon={<KeyboardArrowLeft />}
      sx={{ justifySelf: 'start', borderRadius: 0 }}
    >
      Go Back
    </Button>
  );
};

export default GoBack;
