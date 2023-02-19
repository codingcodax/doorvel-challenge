import type {
  RawAmenityParent,
  RawAmenityChild,
  AmenityChild,
  AmenityParent,
} from '~/types/amenities';
import { data as amenitiesParents } from '~/data/amenitiesParents';
import { results as amenitiesChilds } from '~/data/amenitiesChilds';

export const getAmenitiesParents = async () => {
  try {
    const res = await fetch(
      'http://54.177.198.128:8001/api/cat-amenities-parents/'
    );

    const { data: amenitiesParents } = (await res.json()) as RawAmenityParent;

    return amenitiesParents;
  } catch (error) {
    return amenitiesParents;
  }
};

export const getAmenityParent = async (id: number) => {
  try {
    const res = await fetch(
      `http://54.177.198.128:8001/api/cat-amenities-parents/${id}`
    );
    const amenityParent = (await res.json()) as AmenityParent;

    return amenityParent;
  } catch (error) {
    const amenityParent = amenitiesParents.filter(
      (amenity) => amenity.id === id
    )[0];

    if (!amenityParent) return amenitiesParents[0];

    return amenityParent;
  }
};

export const getAmenitiesChilds = async () => {
  try {
    const res = await fetch(
      'http://54.177.198.128:8001/api/cat-amenities-childs/'
    );

    const { results: amenitiesChilds } = (await res.json()) as RawAmenityChild;

    return amenitiesChilds;
  } catch (error) {
    return amenitiesChilds;
  }
};

export const getAmenitiesChildsByParentId = async (id: number) => {
  try {
    const res = await fetch(
      'http://54.177.198.128:8001/api/cat-amenities-childs/'
    );

    const { results: amenitiesChilds } = (await res.json()) as RawAmenityChild;

    const amenitiesChildsFilter = amenitiesChilds.filter(
      (amenity) => amenity.amenity_parent == id
    );

    return amenitiesChildsFilter;
  } catch (error) {
    const amenitiesChildesFiler = amenitiesChilds.filter(
      (amenity) => amenity.amenity_parent == id
    );

    return amenitiesChildesFiler;
  }
};

export const getAmenityChild = async (id: number) => {
  try {
    const res = await fetch(
      `http://54.177.198.128:8001/api/cat-amenities-childs/${id}`
    );

    const amenityChild = (await res.json()) as AmenityChild;

    return amenityChild;
  } catch (error) {
    const amenityChild = amenitiesChilds.filter(
      (amenity) => amenity.id == id
    )[0];

    if (!amenityChild) return amenitiesChilds[0];

    return amenityChild;
  }
};
