import type { z } from 'zod';

import type {
  amenityParent,
  amenityChild,
  rawAmenityChild,
} from '~/schemas/amenities';

export type AmenityParent = z.infer<typeof amenityParent>;
export type RawAmenityParent = {
  data: AmenityParent[];
  data_received: Record<string, never>;
};

export type AmenityChild = z.infer<typeof amenityChild>;
export type RawAmenityChild = z.infer<typeof rawAmenityChild>;
