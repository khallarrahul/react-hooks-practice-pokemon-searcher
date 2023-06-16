import React from "react";

function Search({ search, setSearch }) {
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input type="text" className="prompt" onChange={handleSearch} value={search} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
