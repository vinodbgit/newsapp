import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import SearchForm from './components/SearchForm';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('latest');

  useEffect(() => {
    const fetchNews = async () => {
      const apiKey = '1c824b62be1a40f0af4529f07a8c45c9'; //https://newsapi.org/
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
      setArticles(response.data.articles);
    };

    fetchNews();
  }, [query]);

  return (
    <div className="App">
      <div className="header">
        <img src="news.png" alt="Logo" className="logo" />
        <h1 className="headline">News Now</h1>
      </div>
      <SearchForm setQuery={setQuery} />
      <NewsList articles={articles} />
    </div>
  );
};

export default App;
