import { Grid } from '@mui/material';

import type { AmenityChild } from '~/types/amenities';

import Card from './Card';

type Props = {
  items: AmenityChild[];
};

const ChildCards = ({ items }: Props) => {
  return (
    <Grid container component='ul' mt={0} pl={0} spacing={2}>
      {items.map((item) => (
        <Grid
          key={item.id}
          item
          component='li'
          lg={3}
          md={4}
          sm={6}
          sx={{ listStyleType: 'none' }}
          xs={12}
        >
          <Card id={item.id} name={item.name} side={item.property_category} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ChildCards;

