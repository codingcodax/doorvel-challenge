import { Box, Typography } from '@mui/material';
import type { GetServerSideProps, NextPage } from 'next';

import { getAmenityChild } from '~/lib/amenity';
import type { AmenityChild } from '~/types/amenities';

export const getServerSideProps: GetServerSideProps<{
  amenityChild: AmenityChild;
}> = async (context) => {
  const id = context.params?.id as string;
  const amenityChild = await getAmenityChild(+id);

  return { props: { amenityChild } };
};

type ChildProps = {
  amenityChild: AmenityChild;
};

// eslint-disable-next-line react/prop-types
const Child: NextPage<ChildProps> = ({ amenityChild }: ChildProps) => {
  return (
    <Box>
      <Typography>Name: {amenityChild.name}</Typography>
      <Typography>Parent ID: {amenityChild.id}</Typography>
      <Typography>Category ID: {amenityChild.property_category}</Typography>
    </Box>
  );
};

export default Child;
