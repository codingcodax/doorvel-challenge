import type { GetServerSideProps, NextPage } from 'next';
import { Box, Container, Typography } from '@mui/material';

import { getAmenityChild, getAmenityParent } from '~/lib/amenity';
import type { AmenityParent, AmenityChild } from '~/types/amenities';
import { GoBack, NavBar, Title } from '~/components';

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
  return (
    <Container maxWidth='lg'>
      <NavBar>
        <GoBack href={`/parent/${amenityChild.amenity_parent}`} />
        <Title>Parent: {amenityParent.name}</Title>
        <Box />
      </NavBar>
      <Box>
        <Typography>Name: {amenityChild.name}</Typography>
        <Typography>Parent ID: {amenityChild.amenity_parent}</Typography>
        <Typography>Category ID: {amenityChild.property_category}</Typography>
      </Box>
    </Container>
  );
};

export default Child;
