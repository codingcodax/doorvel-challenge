import { SvgIcon } from '@mui/material';

const Logo = () => {
  return (
    <SvgIcon fontSize='large' viewBox='0 0 40 40'>
      <circle cx='10' cy='10' fill='#000' r='5' />
      <circle
        cx='30'
        cy='10'
        fill='none'
        r='4.5'
        stroke='#000'
        strokeWidth={3}
      />
      <circle cx='30' cy='30' fill='#000' r='5' />
      <circle cx='10' cy='30' fill='#000' r='5' />
    </SvgIcon>
  );
};

export default Logo;
