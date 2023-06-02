import React from "react";
import "./searchinput.css";

const SearchInput = ({ searchQuery, handleSearchInputChange }) => {
  return (
    <div className="searchDiv">
      <input
        type="text"
        className="searchInput"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <button className="searchBtn"></button>
    </div>
  );
};

export default SearchInput;
