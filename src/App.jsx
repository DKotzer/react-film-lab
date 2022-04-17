import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./FilmDetails";
import FilmListing from "./FilmListing";
import TMDB from "./TMDB";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFaveToggle = this.handleFaveToggle.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this); //no idea what this does

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
      fave_status: false,
    };
  }
  handleFaveToggle(film) {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    if (filmIndex >= 0) {
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} from faves`);
      if (film.title === this.state.current.title) {
        console.log("detail fave change detected");
        this.setState({ fave_status: false });
      }
    } else {
      faves.push(film);
      console.log(`Adding ${film.title} to faves`);
      console.log(this.state.current.title);
      if (film.title === this.state.current.title) {
        console.log("detail fave change detected");
        this.setState({ fave_status: true });
      }
    }
    this.setState({ faves });
  }

  addReview(film, text){
    this.setState({
      films: this.state.films.map(e => (e.title === film.title ? {...e.review, text} : e))
      
    })
    console.log(this.state.films)

  }

  handleDetailsClick(film) {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

    axios({
      method: "GET",
      url: url,
    }).then((response) => {
      console.log(response); // take a look at what you get back!
      console.log(`Fetching details for ${film.title}`);
      if (this.state.faves.includes(film)) {
        console.log("fave detected");
        this.setState({ fave_status: true });
      } else {
        this.setState({ fave_status: false });
      }
      this.setState({ current: response.data });
    });
  }

  render() {
    return (
      // <div className='App'>
      <div className='film-library'>
        <FilmListing
          film_list={this.state.films}
          faves={this.state.faves}
          onFaveToggle={this.handleFaveToggle}
          onDetailToggle={this.handleDetailsClick}
        ></FilmListing>
        <FilmDetails
          // films={this.state.films}
          film={this.state.current}
          fave_status={this.state.fave_status}
        ></FilmDetails>
      </div>
      // </div>
    );
  }
}

export default App;

