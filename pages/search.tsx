import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import styles from '../styles/Search.module.css';

interface SearchResult {
  id: number;
  title: string;
  solution: string;
}

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const router = useRouter(); // Access the router

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    try {
      const response = await axios.get<{ results: SearchResult[] }>('/api/search', {
        params: { query },
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const highlightText = (text: string, query: string) => {
    const regex = new RegExp(query, 'gi');
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  const handleClickQuestion = (questionId: number) => {
    router.push(`/question/${questionId}`); // Redirect to the specific question page
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        className={styles.input}
      />
      <ul className={styles.results}>
        {searchResults.length === 0 ? (
          <li className={styles.resultItem}>
            <p>No results found</p>
          </li>
        ) : (
          searchResults.map((result) => (
            <li key={result.id} className={styles['result-item']} onClick={() => handleClickQuestion(result.id)}>
              <h3 dangerouslySetInnerHTML={{ __html: highlightText(result.title, searchQuery) }} />
              <p dangerouslySetInnerHTML={{ __html: highlightText(result.solution, searchQuery) }} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
