import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const NewsSearch = () => {
  const location = useLocation();
  const [query, setQuery] = useState(''); // Default query will be set by useEffect
  const [sortBy, setSortBy] = useState('publishedAt');
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:8080/news', {
        params: { query, sortBy }
      });

      const filteredArticles = response.data.articles.filter(article =>
        ![article.title, article.description].some(text => text.includes('[Removed]'))
      );

      setNewsArticles(filteredArticles);
    } catch (error) {
      setError('Error fetching news.');
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  }, [query, sortBy]);

  useEffect(() => {
    const path = location.pathname.substring(1) || 'News';
    setQuery(path);
  }, [location.pathname]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch, query, sortBy]);

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for news..."
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">Date</option>
          <option value="relevance">Relevance</option>
        </select>
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="news-container">
        {newsArticles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          newsArticles.map((article, index) => (
            <div key={index} className="news-article">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsSearch;