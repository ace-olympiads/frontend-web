import { NextApiRequest, NextApiResponse } from 'next';

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const { token } = await response.json();
        res.status(200).json({ token });
      } else {
        const errorData = await response.json();
        res.status(response.status).json({ error: errorData.message });
      }
    } catch (error) {
      console.error('Error during user login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default loginHandler;
