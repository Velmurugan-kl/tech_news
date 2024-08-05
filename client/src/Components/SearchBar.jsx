// SearchBar.jsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'; // Make sure to add or update styles

const SearchBar = ({ value, onChange, onSubmit }) => {
  return (
    <div className="search-container">
      <form onSubmit={onSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search NEWS"
          value={value}
          onChange={onChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
