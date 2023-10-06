import React from "react";

import SearchIcon from "./searchIcon";

import "./index.css";

const SearchBox = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="search-box">
      <SearchIcon />
      <input
        type="text"
        placeholder="Busca en este sitio web"
        value={searchTerm}
        onChange={handleChange}
        onKeyUp={handleSearch} // Llama a la función de búsqueda al soltar una tecla
      />
    </div>
  );
};

export default SearchBox;
