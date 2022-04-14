import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmList: props.films,
    };
  }
  handleFilterClick(filter) {
    console.log(filter);
  }

  render() {
    let allFilms = this.props.film_list.map((film, index) => {
      return <FilmRow film={film} key={index} />;
    });

    return (
      <div className='film-list'>
        <h1 className='section-title'>FILMS</h1>
        <div className='film-list-filters'>
          <div
            className='film-list-filter'
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className='section-count'>{this.props.film_list.length}</span>
          </div>
          <div
            className='film-list-filter'
            onClick={() => this.handleFilterClick("faves")}
          >
            FAVES
            <span className='section-count'>0</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}
