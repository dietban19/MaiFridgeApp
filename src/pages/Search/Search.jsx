import React from "react";
import "./search.scss";
import { useParams } from "react-router-dom";
const Search = () => {
  const { search } = useParams();
  return (
    <div className="search-container">
      <div className="search-header paddingsPrimary">
        {search ? (
          <>
            <div className="secondaryHeader">Search Results For</div>
            <div className="searched-item">{search}</div>
          </>
        ) : (
          <div>No Search</div>
        )}
        <div className="search-filter">Filter</div>
      </div>
    </div>
  );
};

export default Search;
