import type { GetStaticProps, NextPage } from 'next';
import { Box, Typography } from '@mui/material';

import type { AmenityParent } from '~/types/amenities';

type DataProps = {
  data: AmenityParent[];
  date_recived: Record<string, never>;
};

export const getStaticProps: GetStaticProps<{
  amenitiesParents: AmenityParent[];
}> = async () => {
  const res = await fetch(
    'http://54.177.198.128:8001/api/cat-amenities-parents/'
  );

  const data = (await res.json()) as DataProps;

  return { props: { amenitiesParents: data.data } };
};

type HomeProps = {
  amenitiesParents: AmenityParent[];
};

// eslint-disable-next-line react/prop-types
const Home: NextPage<HomeProps> = ({ amenitiesParents }) => {
  return (
    <Box>
      <Typography>Home page</Typography>
    </Box>
  );
};

export default Home;
