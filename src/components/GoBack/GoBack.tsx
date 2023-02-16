import { KeyboardArrowLeft } from '@mui/icons-material';
import { Button, useMediaQuery } from '@mui/material';

import { Link } from '~/components/ui';

type Props = {
  href: string;
};

const GoBack = ({ href }: Props) => {
  const matches = useMediaQuery('(max-width:600px)');
  return (
    <Button component={Link} href={href} sx={{ mr: 1, justifySelf: 'start' }}>
      <KeyboardArrowLeft />
      {matches ? '' : 'Go Back'}
    </Button>
  );
};

export default GoBack;
