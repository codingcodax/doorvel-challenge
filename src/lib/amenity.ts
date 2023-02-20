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
    return {
      id: 1,
      property_category_id: 1,
      name: 'Estilo de vida',
      seo_friendly: 'estilo-de-vida',
      active_record: true,
      created_at: '2022-04-15T18:32:29.939524',
      updated_at: '2022-04-15T18:32:29.939534',
      created_by: 'Doorvel-TI',
    };
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
    return {
      id: 1,
      name: 'Accesibilidad para adultos mayores',
      seo_friendly: 'accesibilidad-para-adultos-mayores',
      property_category: 1,
      amenity_parent: 1,
    };
  }
};
