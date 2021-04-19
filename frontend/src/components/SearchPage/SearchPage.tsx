import React, { useState } from "react";

function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="theme--white padding-1">
      <button
        className="search__button padding-2"
        onClick={onClick}
      >
        Click or press Enter to search
      </button>
    </div>
  );
}

interface SearchBarProps {
  searchNews: () => void;
  searchString: string;
  setSearchString: (s: string) => void;
}

function SearchBar({ searchNews, searchString, setSearchString }: SearchBarProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchString !== "") {
      e.preventDefault();
      e.stopPropagation();
      searchNews();
    }
  };

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value.trim());
  };

  return (
    <div>
      <form>
        <div className="col-12 padding-top-1 margin-bottom-1">
          <input
            className="search__bar col-6 padding-1"
            id="search"
            type="search"
            value={searchString}
            onChange={onSearchTextChange}
            onKeyPress={handleKeyPress}
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
}


interface Article {
  title: string;
  author: string;
  content: string;
  url: string;
}

interface NewsResponse {
  articles: Article[];
}

function ArticleList({ articles }: NewsResponse) {
  return (
    <div className="results__container padding-3 margin-4 margin-top-2 theme--mist">
      {articles.map((article) => (
        <div className="article__container box-shadow padding-2 margin-4 margin-left-6 margin-right-6 theme--white">
          <h2 className="article__title padding-bottom-2 margin-bottom-2">
            {article.title}
          </h2>
          <h3 className="article__author padding-bottom-2 margin-bottom-2">
            Written by: {article.author || "An uncredited author"}
          </h3>
          <p className="article__content">
            {article.content.length > 150
              ? `${article.content.substring(
                  0,
                  150
                )}... [Article shortened - Click the URL below to read more]`
              : article.content}
          </p>
          <div className="article__url margin-top-2">
            <p>
              <p>Source:</p>
              <a href={article.url}>{article.url}</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SearchPage() {
  const [newsResponse, setNewsResponse] = useState<NewsResponse | null>(null);

  const [searchString, setSearchString] = useState("");

  function queryOnClick() {
    // applies percent-encoding to special characters
    const q = encodeURIComponent(searchString);
    const url = `http://localhost:4000/news-api?search=${q}`;
    fetch(url, {
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result:", result);
        setNewsResponse(result);
      })
      .catch((ex) => {
        console.log("error:", ex);
      });
  }

  return (
    <div className="theme--white">
      <SearchBar
        searchNews={queryOnClick}
        searchString={searchString}
        setSearchString={setSearchString}
      />
      <SearchButton onClick={queryOnClick} />

      {newsResponse && newsResponse.articles ? (
        <ArticleList articles={newsResponse.articles} />
      ) : null}
    </div>
  );
}

export default SearchPage;