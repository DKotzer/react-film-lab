import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";
export default class FilmRow extends Component {
  handleDetailsClick(film) {
    console.log("fetching details for", film);
  }

  render() {
    let url_base = "https://image.tmdb.org/t/p/w780/";
    let posterurl = url_base + this.props.film.poster_path;
    let date = new Date(this.props.film.release_date);
    return (
      <div
        className='film-row'
        onClick={() => this.handleDetailsClick(this.props.film.title)}
      >
        <FilmPoster posterurl={posterurl}></FilmPoster>

        <div className='film-summary'>
          <h1>{this.props.film.title}</h1>
          <p>{date.getFullYear()}</p>
        </div>
        <Fave></Fave>
      </div>
    );
  }
}
