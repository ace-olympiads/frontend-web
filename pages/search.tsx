import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Search.module.css";
import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";

interface SearchResult {
  id: number;
  title: string;
  question_latex?: string;
  solution: string;
  solution_latex: string;
}

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const router = useRouter();

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

  const handleClickQuestion = (questionId: number) => {
    router.push(`/question/${questionId}`);
  };

  const handleSearchQueryChange = (newQuery: string) => {
    setSearchQuery(newQuery);
  };

  const handleSearchResults = (results: SearchResult[]) => {
    setSearchResults(results);
  };

  return (
    <>
      <BackButton />
      <div className={styles.container}>
        <SearchBar
          searchQuery={searchQuery}
          onSearchQueryChange={handleSearchQueryChange}
          onSearchResults={handleSearchResults}
          inputplaceholder="Search for questions..."
        />
        <ul className={styles.results}>
          {searchResults.length === 0 ? (
            <li className={styles.resultItem}>
              <p>No results found</p>
            </li>
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
      </div>
    </>
  );
}
