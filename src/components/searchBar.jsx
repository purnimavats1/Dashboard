//searchBar.jsx
import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = ({ widgets, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
    onSearch(value);
  };

  return (
  <nav className="navbar">
    <div className="brand">
        <h1>Dashboard</h1>
      </div>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Widgets..."
        value={query}
        onChange={handleChange}
      />
    </div>
    </nav>
    );
};

export default SearchBar;
