import React, { Component } from "react";
import FilmRow from "./FilmRow";

export default class FilmListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmList: props.films,
    };
  }

  render() {
    let allFilms = this.props.film_list.map((title, index) => {
      return <FilmRow film={this.props.film_list[index]} id={index} />;
    });
    console.log("book_list test", allFilms);
    console.log(allFilms[0]);
    console.log(this.props.film_list[0].title);
    return (
      <div className='film-list'>
        <h1 className='section-title'>FILMS</h1>
        {/* <h1>{this.props.film_list[0].title}</h1> */}
        <h1>{allFilms}</h1>
      </div>
    );
  }
}
