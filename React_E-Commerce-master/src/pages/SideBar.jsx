/*
import React from 'react';

function SideBar({ filters, setFilters }) {
  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleMinPriceChange = (e) => {
    setFilters({ ...filters, minPrice: parseFloat(e.target.value) });
  };

  const handleMaxPriceChange = (e) => {
    setFilters({ ...filters, maxPrice: parseFloat(e.target.value) });
  };

  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>
      <label>Category:</label>
      <select value={filters.category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="clothing">Clothing</option>
        <option value="shoes">Shoes</option>
        <option value="accessories">Accessories</option>
      </select>
      <label>Min Price:</label>
      <input type="number" value={filters.minPrice} onChange={handleMinPriceChange} />
      <label>Max Price:</label>
      <input type="number" value={filters.maxPrice} onChange={handleMaxPriceChange} />
    </div>
  );
}

export default SideBar; */
