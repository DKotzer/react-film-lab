import React from "react";
import "./App.css";
import FilmDetails from "./FilmDetails";
import FilmListing from "./FilmListing";
import TMDB from "./TMDB";

function App() {
  return (
    <div className='film-library'>
      <FilmListing film_list={TMDB.films}></FilmListing>
      <FilmDetails film_list={TMDB.films}></FilmDetails>
    </div>
  );
}

export default App;
