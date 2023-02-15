import type {
  RawAmenityParent,
  RawAmenityChild,
  AmenityChild,
  AmenityParent,
} from '~/types/amenities';

export const getAmenitiesParents = async () => {
  const res = await fetch(
    'http://54.177.198.128:8001/api/cat-amenities-parents/'
  );

  const { data: amenitiesParents } = (await res.json()) as RawAmenityParent;

  return amenitiesParents;
};

export const getAmenityParent = async (id: number) => {
  const res = await fetch(
    `http://54.177.198.128:8001/api/cat-amenities-parents/${id}`
  );
  const amenityParent = (await res.json()) as AmenityParent;

  return amenityParent;
};

export const getAmenitiesChilds = async () => {
  const res = await fetch(
    'http://54.177.198.128:8001/api/cat-amenities-childs/'
  );

  const { results: amenitiesChilds } = (await res.json()) as RawAmenityChild;

  return amenitiesChilds;
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

export const getAmenityChild = async (id: number) => {
  const res = await fetch(
    `http://54.177.198.128:8001/api/cat-amenities-childs/${id}`
  );

  const amenityChild = (await res.json()) as AmenityChild;

  return amenityChild;
};
