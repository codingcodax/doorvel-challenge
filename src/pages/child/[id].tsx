import { Box, Container, Typography } from '@mui/material';
import type { GetServerSideProps, NextPage } from 'next';

import { getAmenityChild, getAmenityParent } from '~/lib/amenity';
import type { AmenityParent, AmenityChild } from '~/types/amenities';

type Props = {
  amenityParent: AmenityParent;
  amenityChild: AmenityChild;
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const id = context.params?.id as string;

  const amenityParent = await getAmenityParent(+id);
  const amenityChild = await getAmenityChild(+id);

  return { props: { amenityParent, amenityChild } };
};

// eslint-disable-next-line react/prop-types
const Child: NextPage<Props> = ({ amenityParent, amenityChild }: Props) => {
  return (
    <Container maxWidth='lg'>
      <Box>
        <Typography component='h2' textAlign='center' textTransform='uppercase'>
          Parent: {amenityParent.name}
        </Typography>
        <Typography>Name: {amenityChild.name}</Typography>
        <Typography>Parent ID: {amenityChild.id}</Typography>
        <Typography>Category ID: {amenityChild.property_category}</Typography>
      </Box>
    </Container>
  );
};

export default Child;
