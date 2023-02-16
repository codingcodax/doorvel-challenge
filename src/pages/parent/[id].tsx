import type { GetStaticProps, NextPage } from 'next';
import { Box, Container, Typography } from '@mui/material';

import type { AmenityChild, AmenityParent } from '~/types/amenities';
import {
  getAmenitiesParents,
  getAmenitiesChildsByParentId,
  getAmenityParent,
} from '~/lib/amenity';
import { ChildsCards } from '~/components';

export const getStaticPaths = async () => {
  const amenitiesParents = await getAmenitiesParents();
  const paths = amenitiesParents.map((amenity) => ({
    params: { id: amenity.id.toString() },
  }));

  return { paths, fallback: false };
};

type Props = {
  amenityParent: AmenityParent;
  amenitiesChilds: AmenityChild[];
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id as string;

  const amenityParent = await getAmenityParent(+id);
  const amenitiesChilds = await getAmenitiesChildsByParentId(+id);

  return { props: { amenityParent, amenitiesChilds } };
};

// eslint-disable-next-line react/prop-types
const Parent: NextPage<Props> = ({ amenityParent, amenitiesChilds }: Props) => {
  return (
    <Container maxWidth='lg'>
      <Box>
        <Typography component='h2' textAlign='center' textTransform='uppercase'>
          Parent: {amenityParent.name}
        </Typography>
        <Typography>Select one:</Typography>

        <ChildsCards items={amenitiesChilds} />
      </Box>
    </Container>
  );
};

export default Parent;
