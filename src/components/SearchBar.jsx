import React, { useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

// STYLE IMPORTS
import "../styles/SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");
  const inputRef = useRef(null); // Create a ref for the input field

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  // Searches on enter key
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    onSearch(location);
    clearInput(); // Call clearInput to reset the input field
  };

  const clearInput = () => {
    setLocation(""); // Reset the location state to clear the input field
    inputRef.current.focus(); // Set focus back to the input field
  };


  return (
    <div className="search-bar d-flex align-items-center p-2 ">
      <div className="icon">
        <button
          className="search-btn border-0"
          type="submit"
          onClick={handleSearch}
        >
          <SearchIcon />
        </button>
      </div>
      <input
        className="search-input border-0"
        type="search"
        placeholder="Enter a location..."
        value={location}
        onChange={handleInputChange}
        ref={inputRef} // Assign the ref to the input field
        required={true}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
