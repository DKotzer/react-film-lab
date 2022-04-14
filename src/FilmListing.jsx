import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmList: this.props.film_list,
      filter: "all",
    };
  }
  handleFilterClick(filter) {
    if (filter === "faves") {
      console.log("faves");
      console.log(this.state.filmList);
      this.setState({
        filter: "faves",
        filmList: this.props.faves,
      });
    }
    if (filter === "all") {
      console.log("all");
      this.setState({
        filter: "all",
        filmList: this.props.film_list,
      });
    }
  }

  render() {
    const allFilms = this.state.filmList.map((film) => {
      return (
        <FilmRow
          film={film}
          key={film.id}
          onFaveToggle={() => this.props.onFaveToggle(film)}
          isFave={this.props.faves.includes(film)}
          onDetailToggle={() => this.props.onDetailToggle(film)}
        />
      );
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
            <span className='section-count'>{this.props.faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}
