import React, { useState } from "react";

function SearchButton() {
  const [newsResponse, setNewsResponse] = useState(null);

  function queryOnClick() {
    try {
      fetch(`http://localhost:4000/news-api`, {
        headers: { "Content-Type": "application/json" }
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("result:", result);
          setNewsResponse(result);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="theme--white padding-1">
      <button
        className="search__button padding-2"
        onClick={queryOnClick}
      >
        Click to search
      </button>

      {newsResponse && newsResponse.articles ? (
        <div className="results__container padding-3 margin-4 margin-top-2 margin-bottom-1 theme--mist">
          {newsResponse.articles.map(
            (article: {
              title: React.ReactNode;
              author: string;
              content: string;
              url: string;
            }) => (
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
            )
          )}
        </div>
      ) : null}
    </div>
  );
}

export default SearchButton;
