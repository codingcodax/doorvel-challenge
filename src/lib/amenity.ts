import type { RawAmenityParent, RawAmenityChild } from '~/types/amenities';

export const getAmenitiesParents = async () => {
  const res = await fetch(
    'http://54.177.198.128:8001/api/cat-amenities-parents/'
  );

  const { data: amenitiesParents } = (await res.json()) as RawAmenityParent;

  return amenitiesParents;
};

export const getAmenityParent = async (id: number) => {
  const amenitiesParents = await getAmenitiesParents();
  const amenityParent = amenitiesParents.filter((amenity) => amenity.id === id);

  return amenityParent;
};

export const getAmenitiesChildsByParentId = async (id: number) => {
  const res = await fetch(
    'http://54.177.198.128:8001/api/cat-amenities-childs/'
  );

  const { results: amenitiesChilds } = (await res.json()) as RawAmenityChild;

  const amenitiesChildsFilter = amenitiesChilds.filter(
    (amenity) => amenity.amenity_parent == id
  );

  return amenitiesChildsFilter;
};
