import { z } from 'zod';

export const amenityParent = z.object({
  id: z.number(),
  name: z.string(),
  seo_friendly: z.string(),
  property_category_id: z.number(),
  active_record: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
  created_by: z.string(),
});

export const amenityChild = z.object({
  id: z.number(),
  name: z.string(),
  seo_friendly: z.string(),
  property_category: z.number(),
  amenityParent: z.number(),
});
