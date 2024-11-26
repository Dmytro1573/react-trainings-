import { useEffect, useState } from "react";
import css from "./App.module.css";
import { getArticles } from "../../articles-api";
import ArticleList from "../ArticleList/ArticleList";
import SearchForm from "../SearchForm/SearchForm";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function getItems() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getArticles(query, page);
        setArticles((prevState) => [...prevState, ...data]);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getItems();
  }, [query, page]);

  const handleSearch = (topic) => {
    setQuery(topic);
    setPage(1);
    setArticles([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className={css.container}>
        <h1>HTTP requests in React</h1>
        <SearchForm onSearch={handleSearch} />
        {isLoading && <p>Loading please wait......</p>}
        {isError && <p>Something went wrong. Please try again</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {articles.length > 0 && (
          <button type="button" onClick={handleLoadMore} disabled={isLoading}>
            Load more
          </button>
        )}
      </div>
    </>
  );
}
