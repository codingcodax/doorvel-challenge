import { Card, Typography } from '@mui/material';

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
    <Card
      noLinkStyle
      component={Link}
      href={`/${amenityType === 'parent' ? 'parent' : 'child'}/${id}`}
      sx={{
        display: 'inline-block',
        padding: 1,
        height: '100%',
        width: '100%',
        textDecoration: 'none',
        backgroundColor: 'background.subtle',
        border: `1px solid transparent`,
        borderRadius: 0,
        boxShadow: 'none',
        transition: 'ease-in-out 200ms',
        transitionProperty: 'color, border',
        ':hover': {
          color: 'primary.main',
          borderColor: 'border.hover',
        },
      }}
    >
      <Typography color='text.secondary' variant='caption'>
        {side}
      </Typography>
      <Typography noWrap>{name}</Typography>
    </Card>
  );
};

export default MyCard;
