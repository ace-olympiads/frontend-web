import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('http://127.0.0.1:8000/concepts/');
    const concepts = response.data.map((concept: any) => ({
      id: concept.id,
      title: concept.title,
      content: concept.description,
    }));

    res.status(200).json(concepts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching questions' });
  }
}
