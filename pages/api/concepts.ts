import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { ConceptData, ConceptType } from '../../types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}concepts/`);

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching questions' });
  }
}
