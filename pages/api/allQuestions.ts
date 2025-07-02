import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`https://backend.aceacad.com/question/add`);
    const questions = response.data
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching questions' });
  }
}
