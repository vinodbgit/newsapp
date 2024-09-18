import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
  
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for latest news"
      />
      <button type="submit" className='search' style={{justifyContent:"center"}}>Search</button>
    </form>
  );
};

export default SearchForm;
