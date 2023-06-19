import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('http://127.0.0.1:8000/question/add');
    const questions = response.data.map((question: any) => ({
      id: question.id,
      title: question.question_text,
      content: question.text_solution,
    }));

    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching questions' });
  }
}
