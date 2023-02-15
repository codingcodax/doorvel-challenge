import { Card, Button, CardContent, Typography, Grid } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

import type { AmenityParent } from '~/types/amenities';

type Props = {
  side: AmenityParent['created_by'];
  name: AmenityParent['name'];
};

const MyCard = ({ side, name }: Props) => {
  return (
    <Card sx={{ boxShadow: 'none' }}>
      <CardContent>
        <Grid container direction='row' justifyContent='space-between'>
          <Grid item xs='auto'>
            <Typography color='text.secondary' fontSize={13}>
              {side}
            </Typography>
            <Typography>{name}</Typography>
          </Grid>

          <Grid item xs='auto'>
            <Button>
              <ArrowForwardIos />
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MyCard;
