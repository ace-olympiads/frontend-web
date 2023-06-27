import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface SearchResult {
  id: number;
  title: string;
  solution: string;
}

const searchHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  try {
    const response = await axios.get< SearchResult[] >('${process.env.NEXT_PUBLIC_BACKEND_URL}question/search/', {
      params: { query },
    });

    const searchResults: SearchResult[] = response.data;

    res.status(200).json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during the search.' });
  }
};

export default searchHandler;
