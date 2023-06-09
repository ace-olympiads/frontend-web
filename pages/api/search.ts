import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface SearchResult {
  id: number;
  question: string;
  answer: string;
}

const searchHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  try {
    // Make a request to your Django backend's search API endpoint
    const response = await axios.get<{ results: SearchResult[] }>('http://localhost:8000/questions/search/', {
      params: { query },
    });

    const searchResults: SearchResult[] = response.data.results;

    res.status(200).json({ results: searchResults });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during the search.' });
  }
};

export default searchHandler;
