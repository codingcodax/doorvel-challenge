import { Typography } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return (
    <Typography
      component='h2'
      lineHeight='1'
      textAlign='center'
      textTransform='uppercase'
    >
      {children}
    </Typography>
  );
};

export default Title;
