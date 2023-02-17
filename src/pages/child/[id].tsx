import type { GetServerSideProps, NextPage } from 'next';
import { Box, Card, Container, Typography } from '@mui/material';

import { getAmenityChild, getAmenityParent } from '~/lib/amenity';
import type { AmenityParent, AmenityChild } from '~/types/amenities';
import { GoBack, NavBar, Seo, Title } from '~/components';

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
    <>
      <Seo
        description='Amenity child page with his details'
        keywords={amenityChild.name}
        name={amenityChild.name}
        ogImage='og-child.png'
        path={`/child/${amenityChild.id}`}
      />

      <Container maxWidth='lg'>
        <NavBar>
          <GoBack href={`/parent/${amenityChild.amenity_parent}`} />
          <Title>Parent: {amenityParent.name}</Title>
          <Box />
        </NavBar>
        <Card
          sx={{
            display: 'inline-block',
            padding: 2,
            textDecoration: 'none',
            backgroundColor: 'background.subtle',
            border: `1px solid transparent`,
            borderRadius: 0,
            boxShadow: 'none',
            transition: 'ease-in-out 200ms',
            transitionProperty: 'color, border',
            ':hover': {
              borderColor: 'border.hover',
            },
          }}
        >
          <Typography color='text.secondary' variant='caption'>
            ID: {amenityChild.id}
          </Typography>
          <Typography noWrap component='h1'>
            {amenityChild.name}
          </Typography>
          <Typography mr={2} variant='overline'>
            Parent ID: {amenityChild.amenity_parent}
          </Typography>
          <Typography variant='overline'>
            Category ID: {amenityChild.property_category}
          </Typography>
        </Card>
      </Container>
    </>
  );
};

export default Child;
