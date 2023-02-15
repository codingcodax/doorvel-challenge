import { Grid } from '@mui/material';

import type { AmenityParent } from '~/types/amenities';

import Card from './Card';

type Props = {
  items: AmenityParent[];
};

const Cards = ({ items }: Props) => {
  return (
    <Grid container component='ul' mt={0} pl={0} spacing={2}>
      {items.map((item) => (
        <Grid
          key={item.id}
          item
          component='li'
          sm={6}
          sx={{ listStyleType: 'none' }}
          xs={12}
        >
          <Card name={item.name} side={item.created_by} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
