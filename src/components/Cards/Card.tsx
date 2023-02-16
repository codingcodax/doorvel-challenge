import { Card, Button, CardContent, Typography, Grid } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';

import type { AmenityChild, AmenityParent } from '~/types/amenities';
import { Link } from '~/components/ui';

type Props = {
  id: AmenityParent['id'] | AmenityChild['id'];
  side: AmenityParent['created_by'] | AmenityChild['amenity_parent'];
  name: AmenityParent['name'] | AmenityChild['name'];
  amenityType: 'parent' | 'child';
};

const MyCard = ({ id, side, name, amenityType }: Props) => {
  return (
    <Card sx={{ boxShadow: 'none' }}>
      <CardContent>
        <Grid container direction='row' justifyContent='space-between'>
          <Grid item xs='auto'>
            <Typography color='text.secondary' fontSize={13}>
              {side}
            </Typography>
            <Typography noWrap>{name}</Typography>
          </Grid>

          <Grid item xs='auto'>
            <Button
              noLinkStyle
              component={Link}
              href={`/${amenityType === 'parent' ? 'parent' : 'child'}/${id}`}
            >
              <ArrowForwardIos />
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MyCard;
