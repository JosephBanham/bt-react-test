import React, { useState } from 'react'

function SearchButton() {
  const [ newsResponse, setNewsResponse ]= useState(null);

  function queryOnClick() {
    fetch(`http://localhost:4000/news-api`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('result:', result);
        setNewsResponse(result);
      })
      .catch((ex) => {
        console.log('error:', ex);
      });
  }

  return (
    <div className="theme--white">
      <button className="search__button padding-1 margin-1" onClick={queryOnClick}>
        Click to search
      </button>
    
      {newsResponse && newsResponse.articles ? (
        <div className="results__container padding-2 theme--mist">
          {newsResponse.articles.map((article: { 
            title: React.ReactNode;
            author: React.ReactNode;
            content: React.ReactNode;
            url: string;
          }) => (
            <div className="article__container box-shadow padding-2 margin-4 margin-left-6 margin-right-6 theme--white">
              <h2 className="article__title padding-bottom-2 margin-bottom-2">{article.title}</h2>
              <h3 className="article__author padding-bottom-2 margin-bottom-2">{article.author}</h3>
              <p className="article__content">{article.content}</p>
              <div className="article__url margin-top-2">
                <p>
                  <p>Source:</p>
                  <a href={article.url}>{article.url}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchButton;
