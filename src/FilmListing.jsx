import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmList: props.films,
      filter: "all",
    };
  }
  handleFilterClick(filter) {
    if (filter === "faves") {
      console.log("faves");
      this.setState({
        filter: "faves",
      });
    }
    if (filter === "all") {
      console.log("all");
      this.setState({
        filter: "all",
      });
    }
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
            className={`film-list-filter ${
              this.state.filter === "all" ? "is-active" : ""
            }`}
            onClick={() => this.handleFilterClick("all")}
          >
            ALL
            <span className='section-count'>{this.props.film_list.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              this.state.filter === "faves" ? "is-active" : ""
            }`}
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
