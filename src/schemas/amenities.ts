import { z } from 'zod';

export const amenityParent = z.object({
  id: z.number(),
  name: z.string(),
  seo_friendly: z.string(),
  property_category_id: z.number(),
  active_record: z.boolean(),
  created_at: z.string(),
  updated_at: z.string(),
  created_by: z.string(),
});

export const amenityChild = z.object({
  id: z.number(),
  name: z.string(),
  seo_friendly: z.string(),
  property_category: z.number(),
  amenity_parent: z.number(),
});

export const rawAmenityChild = z.object({
  count: z.number(),
  next: z.string().nullish(),
  previous: z.string().nullish(),
  results: z.array(amenityChild),
});
