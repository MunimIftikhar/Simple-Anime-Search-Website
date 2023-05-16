import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ setAnime }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchAnimeByName = async (value) => {
    const url = `https://api.jikan.moe/v4/anime?q=${value}&limit=1`;
    try {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setAnime(result.data);
        });
    } catch (error) {
      fetchDataByCharacter(value);
    }
  };

  const fetchDataByCharacter = async (value) => {
    const url = `https://api.jikan.moe/v4/character?q=${value}&limit=1`;
    try {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setAnime(result.data);
        });
    } catch (error) {
      return;
    }
  };

  const fetchDataByGenre = async (value) => {
    const url = `https://api.jikan.moe/v4/genres?q=${value}&limit=1`;
    try {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setAnime(result.data);
        });
    } catch (error) {
      return;
    }
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callAPI = (e) => {
    if (searchValue.length === 0) {
      setAnime([]);
    } else {
      fetchAnimeByName(searchValue);
      resetInputField();
    }
  };

  return (
    <div className="input-wrapper">
      <input
        className="search-bar-input"
        placeholder="Type Anime Name or Character..."
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <input
        className="submit-button"
        onClick={callAPI}
        type="submit"
        value="Search"
      />
    </div>
  );
};

export default SearchBar;
