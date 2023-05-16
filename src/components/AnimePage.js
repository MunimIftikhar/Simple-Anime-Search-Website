import * as React from "react";
import "./AnimePage.css";

export default function AnimePage({ page, setPage, setAnime }) {
  if (page.length === 0) {
    return;
  }
  //   setAnime([]);
  console.log(page);

  const handleClick = (e) => {
    console.log("page");
    setPage([]);
    setAnime([]);
  };

  //   function checkAllFields() {
  //     if (
  //       page[0].title != null &&
  //       page[0].episodes != null &&
  //       page[0].rank != null &&
  //       page[0].status != null &&
  //       page[0].score != null &&
  //       page[0].year != null
  //     ) {
  //       return true;
  //     }
  //   }

  //   if (checkAllFields()) {
  //     return (
  //       <>
  //         <div className="anime-page">
  //           <div className="anime-info">
  //             <h1>{page[0].title}</h1>
  //             <p>Episodes: {page[0].episodes}</p>
  //             <p>Rank: {page[0].rank}</p>
  //             <p>Status: {page[0].status}</p>
  //             <p>Rating: {page[0].score}</p>
  //             <p>Year Released: {page[0].year}</p>
  //             <button className="search-button" onClick={handleClick}>
  //               Search More
  //             </button>
  //           </div>
  //         </div>
  //       </>
  //     );
  //   }

  return (
    <>
      <div className="anime-page">
        <div className="anime-info">
          <h1>{page[0].title}</h1>
          <p>Rank: {page[0].rank}</p>
          <p>Status: {page[0].status}</p>
          <p>Rating: {page[0].score}</p>
          <p>Episodes: {page[0].episodes}</p>
          <p>Year Released: {page[0].year}</p>
          <p>Duration: {page[0].duration}</p>
          <p>Type: {page[0].type}</p>
          <button className="search-button" onClick={handleClick}>
            Search More
          </button>
        </div>
      </div>
    </>
  );
}
