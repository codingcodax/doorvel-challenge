import type { GetStaticProps, NextPage } from 'next';
import { Box, Container, Typography } from '@mui/material';
import type { SyntheticEvent } from 'react';
import { useMemo, useState } from 'react';

import type { AmenityChild, AmenityParent } from '~/types/amenities';
import type amenitiesParents from '~/data/amenitiesParents.json';
import type amenitiesChilds from '~/data/amenitiesChilds.json';
import {
  getAmenitiesParents,
  getAmenitiesChildsByParentId,
  getAmenityParent,
} from '~/lib/amenity';
import {
  ChildsCards,
  GoBack,
  NavBar,
  SearchBar,
  Seo,
  Title,
} from '~/components';

export const getStaticPaths = async () => {
  const amenitiesParents = await getAmenitiesParents();
  const paths = amenitiesParents.map((amenity) => ({
    params: { id: amenity.id.toString() },
  }));

  return { paths, fallback: false };
};

type Props = {
  amenityParent: AmenityParent | (typeof amenitiesParents.data)[0];
  amenitiesChilds: AmenityChild[] | typeof amenitiesChilds.results;
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id as string;

  const amenityParent = await getAmenityParent(+id);
  const amenitiesChilds = await getAmenitiesChildsByParentId(+id);

  return { props: { amenityParent, amenitiesChilds } };
};

const Parent: NextPage<Props> = ({ amenityParent, amenitiesChilds }: Props) => {
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  const filteredAmenitiesChilds = useMemo(() => {
    return amenitiesChilds.filter((amenity) =>
      amenity.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [amenitiesChilds, inputValue]);

  const autocompleteOnChange = (
    _: SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => {
    setValue(newValue);
  };

  const autocompleteOnInputChange = (
    _: SyntheticEvent<Element, Event>,
    newInputValue: string
  ) => {
    setInputValue(newInputValue);
  };

  return (
    <>
      <Seo
        description='Amenity parent page with a list of amenities childs'
        keywords={amenityParent.name}
        name={amenityParent.name}
        ogImage='og-parent.png'
        path={`/parent/${amenityParent.id}`}
      />

      <Container maxWidth='lg'>
        <NavBar>
          <GoBack href={`/`} />
          <Title>Parent: {amenityParent.name}</Title>
          <SearchBar
            inputValue={inputValue}
            options={amenitiesChilds.map((amenity) => amenity.name)}
            value={value}
            onChange={autocompleteOnChange}
            onInputChange={autocompleteOnInputChange}
          />
        </NavBar>
        <Box>
          <Typography>Select one child amenity to see his details:</Typography>

          <ChildsCards items={filteredAmenitiesChilds} />
        </Box>
      </Container>
    </>
  );
};

export default Parent;
