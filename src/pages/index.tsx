import type { GetStaticProps, NextPage } from 'next';
import { Box, Typography } from '@mui/material';

import type { AmenityParent } from '~/types/amenities';
import { getAmenitiesParents } from '~/lib/amenity';
import { ParentsCards } from '~/components';

export const getStaticProps: GetStaticProps<{
  amenitiesParents: AmenityParent[];
}> = async () => {
  const amenitiesParents = await getAmenitiesParents();

  return { props: { amenitiesParents } };
};

type HomeProps = {
  amenitiesParents: AmenityParent[];
};

// eslint-disable-next-line react/prop-types
const Home: NextPage<HomeProps> = ({ amenitiesParents }) => {
  return (
    <Box px={1}>
      <Typography component='h2' textAlign='center' textTransform='uppercase'>
        Parents
      </Typography>
      <Typography>Select one:</Typography>

      <ParentsCards items={amenitiesParents} />
    </Box>
  );
};

export default Home;
