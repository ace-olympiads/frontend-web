import React, { useState, ChangeEvent, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { CiSearch } from "react-icons/ci";
import styles from "../styles/SearchBar.module.css";


interface SearchBarProps {
  onSearchResults: (results: SearchResult[]) => void;
  onSearchQueryChange: (newQuery: string) => void;
  searchQuery: string;
  inputplaceholder:string;
}

interface SearchResult {
  id: number;
  title: string;
  question_latex?: string;
  solution: string;
  solution_latex: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearchResults,
  onSearchQueryChange,
  searchQuery,
  inputplaceholder
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      inputRef.current &&
      event.target instanceof Node &&
      !inputRef.current.contains(event.target)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const highlightText = (text: string, query: string) => {
    const regex = new RegExp(query, "gi");
    return text?.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  const truncateText = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length <= maxWords) {
      return text;
    }
    return words.slice(0, maxWords).join(" ") + "...";
  };

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    onSearchQueryChange(newQuery);

    if (newQuery.trim() === "") {
      onSearchResults([]);
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get<SearchResult[]>(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}question/search/`,
        {
          params: { query: newQuery },
        }
      );
      onSearchResults(response.data);
      setSearchResults(response.data);
      setShowDropdown(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickQuestion = (questionId: number) => {
    router.push(`/question/${questionId}`);
  };

  const handleInputClick = () => {
    setShowDropdown(true);
  };

  return (
    <div className={styles.container} ref={inputRef}>
      <div className={styles.logo_icon}>
        <CiSearch />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onClick={handleInputClick}
        className={styles.input}
        placeholder={inputplaceholder}
      />
      {showDropdown && (
        <ul className={styles.dropdown}>
          {loading ? (
            <li className={styles.dropdownItem}>Loading...</li>
          ) : (
            searchResults.map((result) => (
              <li
                key={result.id}
                className={styles["result-item"]}
                onClick={() => handleClickQuestion(result.id)}
              >
                <h3
                  dangerouslySetInnerHTML={{
                    __html: highlightText(result.title, searchQuery),
                  }}
                />
                <h3
                  dangerouslySetInnerHTML={{
                    __html: highlightText(
                      truncateText(result.question_latex || "", 10),
                      searchQuery
                    ),
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: highlightText(
                      truncateText(result.solution, 20),
                      searchQuery
                    ),
                  }}
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: highlightText(
                      truncateText(result.solution_latex, 15),
                      searchQuery
                    ),
                  }}
                />
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;