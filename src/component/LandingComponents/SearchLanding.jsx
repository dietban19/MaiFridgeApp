import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./landingComponent.scss";
const SearchLanding = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSearch = () => {
    navigate(`/search/${search}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-landing-wrapper paddingsPrimary">
      <div className="search-landing-container flex">
        <div className="search-landing-left">
          <div className="secondaryHeader">Search What To Cook</div>
          <div className="search-landing-input">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>
        </div>
        <div className="search-landing-right">
          <div className="secondaryHeader">Popular Searches</div>
          <div className="popular-searches-container">
            <span>American</span>
            <span>Burger</span>
            <span>Cookies</span>
            <span>Bread</span>
            <span>Italian</span>
            <span>Indian</span>
            <span>Pakistani</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLanding;
