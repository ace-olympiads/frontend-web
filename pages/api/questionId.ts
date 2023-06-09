import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface Question {
  id: number;
  question_text: string;
  video_solution_url: string | null;
  text_solution: string | null;
  text_solution_latex: string | null;
  category: string;
  concept: {
    id: number;
  } | null;
  author: {
    id: number;
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    const response = await axios.get<Question>(`http://localhost:8000/questions/${id}/`);
    const question: Question = response.data;
    console.log(question)
    res.status(200).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch question details' });
  }
}
