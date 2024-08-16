//dashboard.jsx
import React, { useState, useEffect } from 'react';
import Category from './category';
import SearchBar from './searchBar';
import data from '../../public/widget.json';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    setCategories(data.categories);
    setFilteredCategories(data.categories);
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredCategories(categories);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const newFilteredCategories = categories.map((category) => ({
      ...category,
      widgets: category.widgets.filter(widget =>
        widget.name.toLowerCase().includes(lowerQuery)
      ),
    })).filter(category => category.widgets.length > 0);
    setFilteredCategories(newFilteredCategories);
  };

  return (
    <div className="dashboard">
      <SearchBar widgets={categories.flatMap(category => category.widgets)} onSearch={handleSearch} />
      {filteredCategories.map(category => (
        <Category key={category.name} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;
