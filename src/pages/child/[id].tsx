import type { GetServerSideProps, NextPage } from 'next';
import { ArrowBackIos } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@mui/material';

import { getAmenityChild, getAmenityParent } from '~/lib/amenity';
import type { AmenityParent, AmenityChild } from '~/types/amenities';
import { Link } from '~/components/ui';

type Props = {
  amenityParent: AmenityParent;
  amenityChild: AmenityChild;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const id = context.params?.id as string;

  const amenityChild = await getAmenityChild(+id);
  const amenityParent = await getAmenityParent(amenityChild.amenity_parent);

  return { props: { amenityParent, amenityChild } };
};

const Child: NextPage<Props> = ({ amenityParent, amenityChild }: Props) => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Container maxWidth='lg'>
      <Box>
        <Grid container alignItems='center' direction='row'>
          <Button
            component={Link}
            href={`/parent/${amenityParent.id}`}
            sx={{ mr: 1 }}
          >
            <ArrowBackIos />
            {matches ? 'Go Back' : ''}
          </Button>
          <Typography
            component='h2'
            lineHeight='1'
            textAlign='center'
            textTransform='uppercase'
          >
            Parent: {amenityParent.name}
          </Typography>
        </Grid>
        <Typography>Name: {amenityChild.name}</Typography>
        <Typography>Parent ID: {amenityChild.amenity_parent}</Typography>
        <Typography>Category ID: {amenityChild.property_category}</Typography>
      </Box>
    </Container>
  );
};

export default Child;
