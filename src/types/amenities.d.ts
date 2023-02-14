import type { z } from 'zod';

import type { amenityParent } from '~/schemas/amenities';

export type AmenityParent = z.infer<typeof amenityParent>;
