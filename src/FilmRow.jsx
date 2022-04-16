import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";
import "./App.css";

export default class FilmRow extends Component {
  // handleDetailsClick(film) {
  //   console.log("fetching details for", film);
  // }

  handleDetailClick(e) {
    e.stopPropagation();
    console.log("Handling Detail click!");
    this.props.onDetailToggle();
  }

  render() {
    let url_base = "https://image.tmdb.org/t/p/w780/";
    let posterurl = url_base + this.props.film.poster_path;
    let date = new Date(this.props.film.release_date);
    return (
      <div>
        <div className='film-row' onClick={(e) => this.handleDetailClick(e)}>
          <div className='poster'>
            <FilmPoster posterurl={posterurl}></FilmPoster>
          </div>
          <div className='film-summary'>
            <h1>{this.props.film.title}</h1>
            <p>{date.getFullYear()}</p>
            <div className='fave-icon'>
              <Fave
                onFaveToggle={this.props.onFaveToggle}
                isFave={this.props.isFave}
              ></Fave>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//get help refactoring film row

