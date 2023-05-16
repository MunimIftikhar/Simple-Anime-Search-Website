import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import AnimePage from "./components/AnimePage";

function App() {
  const [anime, setAnime] = useState([]);
  const [page, setPage] = useState([]);

  return (
    <>
      <div className="App">
        <MainPage
          anime={anime}
          setAnime={setAnime}
          page={page}
          setPage={setPage}
        ></MainPage>
        <AnimePage
          page={page}
          setPage={setPage}
          setAnime={setAnime}
        ></AnimePage>
      </div>
    </>
  );
}

export default App;
