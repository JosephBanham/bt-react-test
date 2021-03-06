import React, { useState } from "react";

interface SearchBarProps {
  searchNews: () => void;
  searchString: string;
  setSearchString: (s: string) => void;
}

function SearchBar({ searchNews, searchString, setSearchString }: SearchBarProps) {
  var validInput = true;

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();

      if (searchString !== "" && !searchString.match(/^[a-zA-Z]+$/)) {
        alert('Error - The search term can only use letters.')
        validInput = false;
      }

      if (searchString === "") {
        alert('Error - The search bar is empty.')
        validInput = false;
      }

      if (validInput === true) {
        searchNews();
      } else {
        alert('Please revise your search term and try again.')
      }
    }
  };

  const onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value.trim());
  };

  return (
    <div>
      <form>
        <p className="col-12 padding-1 padding-left-4 box-shadow theme--mist">Please only use letters in your search terms. This is due to form validation.</p>
        <div className="col-12 padding-top-2 margin-6">
          <input
            className="search__bar col-xs-10 col-md-6 padding-1"
            id="search"
            type="search"
            value={searchString}
            onChange={onSearchTextChange}
            onKeyPress={handleKeyPress}
            placeholder="Type to search for news articles. Press Enter to search."
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
  urlToImage: string;
}

interface NewsResponse {
  articles: Article[];
}

function ArticleList({ articles }: NewsResponse) {
  return (
    <div className="results__container padding-3 margin-4 margin-top-2 theme--mist col-12">
      {articles.map((article) => (
        <div className="col-sm-12 col-md-6 col-xl-4">
          <a className="article__container box-shadow theme--white padding-2 margin-2" tabIndex={ 0 } href={article.url || "No URL provided."}>
            <img className="article__image" src={article.urlToImage || "https://via.placeholder.com/1200x800"} alt={article.title || "No image provided"}></img>
            <h2 className="article__title padding-bottom-2 padding-top-2 margin-bottom-2 margin-top-2">
              {article.title + "." || "No article title."}
            </h2>
            <h3 className="article__author padding-bottom-2 margin-bottom-2">
              Written by: {article.author + "." || "An uncredited author."}
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
              <p>Source: <a href={article.url} tabIndex={ -1 }>{article.url || "No URL provided."}</a></p>
            </div>
          </a>
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
    <div className="theme--white padding-bottom-1">
      <SearchBar
        searchNews={queryOnClick}
        searchString={searchString}
        setSearchString={setSearchString}
      />

      {newsResponse && newsResponse.articles ? (
        <ArticleList articles={newsResponse.articles} />
      ) : null}
    </div>
  );
}

export default SearchPage;
