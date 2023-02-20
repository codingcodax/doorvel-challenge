import type { GetStaticProps, NextPage } from 'next';
import { Box, Container, Typography } from '@mui/material';

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

const Home: NextPage<HomeProps> = ({ amenitiesParents }: HomeProps) => {
  return (
    <Container maxWidth='lg'>
      <Box>
        <Typography
          component='h2'
          mb={4}
          textAlign='center'
          textTransform='uppercase'
        >
          Parents
        </Typography>
        <Typography>
          Select one parent amenity to see his relationed childs amenities:
        </Typography>

        <ParentsCards items={amenitiesParents} />
      </Box>
    </Container>
  );
};

export default Home;
