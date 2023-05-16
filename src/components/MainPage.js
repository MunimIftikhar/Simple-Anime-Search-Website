import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Anime from "./Anime";
import "./MainPage.css";

function MainPage({ anime, setAnime, page, setPage }) {
  if (page.length !== 0) {
    return;
  }
  return (
    <div className="main-page">
      <div className="search-bar-container">
        <Header text="Search Anime" />
        <SearchBar setAnime={setAnime} />
        <Anime anime={anime} setPage={setPage} />
      </div>
    </div>
  );
}

export default MainPage;
