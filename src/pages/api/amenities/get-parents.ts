import type { NextApiRequest, NextApiResponse } from 'next';

import { data, data_received } from '~/data/amenitiesParents';

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data, data_received });
};

export default handler;
