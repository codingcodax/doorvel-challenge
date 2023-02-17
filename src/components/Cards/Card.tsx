import { Card, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import type { AmenityChild, AmenityParent } from '~/types/amenities';
import { Link } from '~/components/ui';
import theme from '~/styles/theme';
import { useDarkMode } from '~/hooks';

type Props = {
  id: AmenityParent['id'] | AmenityChild['id'];
  side: AmenityParent['created_by'] | AmenityChild['amenity_parent'];
  name: AmenityParent['name'] | AmenityChild['name'];
  amenityType: 'parent' | 'child';
};

const MyCard = ({ id, side, name, amenityType }: Props) => {
  const isDarkMode = useDarkMode();
  return (
    <Card
      noLinkStyle
      component={Link}
      href={`/${amenityType === 'parent' ? 'parent' : 'child'}/${id}`}
      sx={{
        display: 'inline-block',
        height: '100%',
        width: '100%',
        padding: 1,
        boxShadow: 'none',
        border: `1px solid transparent`,
        borderRadius: 0,
        backgroundColor: isDarkMode ? grey[900] : grey[100],
        ':hover': {
          color: theme.palette.primary.main,
          borderColor: isDarkMode ? grey[700] : grey[300],
        },
        transition: 'ease-in-out 200ms',
        transitionProperty: 'color, border',
        textDecoration: 'none',
      }}
    >
      <Typography color='text.secondary' fontSize={13}>
        {side}
      </Typography>
      <Typography noWrap>{name}</Typography>
    </Card>
  );
};

export default MyCard;
