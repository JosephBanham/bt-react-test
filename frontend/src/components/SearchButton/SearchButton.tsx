import React, { useState } from 'react'
import './SearchButton.css';

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
    <div>
      <button className="search-button" onClick={queryOnClick}>
        Search
      </button>
    
      {newsResponse && newsResponse.articles ? (
        <div className="results-container">
          {newsResponse.articles.map((article: { 
            title: React.ReactNode;
            author: React.ReactNode;
            content: React.ReactNode;
            url: React.ReactNode;
          }) => (
            <div className="article-container">
              <div className="article-title">{article.title}</div>
              <div className="article-author">{article.author}</div>
              <div className="article-content">{article.content}</div>
              <div className="article-url"><p>Want to read more? Visit:</p>{article.url}</div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchButton;
