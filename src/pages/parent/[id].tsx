import type { GetStaticProps, NextPage } from 'next';
import { Box, Typography } from '@mui/material';

import type { AmenityChild } from '~/types/amenities';
import {
  getAmenitiesParents,
  getAmenitiesChildsByParentId,
} from '~/lib/amenity';
import { ChildsCards } from '~/components';

export const getStaticPaths = async () => {
  const amenitiesParents = await getAmenitiesParents();
  const paths = amenitiesParents.map((amenity) => ({
    params: { id: amenity.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{
  amenitiesChilds: AmenityChild[];
}> = async (context) => {
  const id = context.params?.id as string;

  const amenitiesChilds = await getAmenitiesChildsByParentId(+id);

  return { props: { amenitiesChilds } };
};

type ParentProps = {
  amenitiesChilds: AmenityChild[];
};

// eslint-disable-next-line react/prop-types
const Parent: NextPage<ParentProps> = ({ amenitiesChilds }) => {
  return (
    <Box px={1}>
      <Typography component='h2' textAlign='center' textTransform='uppercase'>
        Parent:
      </Typography>
      <Typography>Select one:</Typography>

      <ChildsCards items={amenitiesChilds} />
    </Box>
  );
};

export default Parent;
