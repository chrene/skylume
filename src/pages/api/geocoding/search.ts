import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'GET') {
    const endpoint = 'https://geocoding-api.open-meteo.com/v1/search';

    const response = await axios.get(endpoint, {
      params: { limit: 10, name: req.query.q, language: 'en' },
    });

    return res.status(200).json(response.data.results);
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}
