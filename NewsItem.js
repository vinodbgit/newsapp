import React from 'react';
import './NewsItem.css';

const NewsItem = ({ article }) => {
  return (
    <div className="news-item">
      <h2 className='news'>{article.title}</h2>
      <p className='article'>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" ><button style={{justifyContent:"center", alignContent:"center"}} className='readbutton'>Read more</button></a>
    </div>
  );
};

export default NewsItem;
