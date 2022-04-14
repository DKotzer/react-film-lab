import React, { Component } from "react";
import "./App.css";
import FilmDetails from "./FilmDetails";
import FilmListing from "./FilmListing";
import TMDB from "./TMDB";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFaveToggle = this.handleFaveToggle.bind(this); //no idea what this does

    this.state = {
      films: TMDB.films,
      faves: [],
      current: {},
    };
  }
  handleFaveToggle(film) {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    if (filmIndex >= 0) {
      faves.splice(filmIndex, 1);
      console.log(`Removing ${film.title} from faves`);
    } else {
      faves.push(film);
      console.log(`Adding ${film.title} to faves`);
    }
    this.setState({ faves });
  }

  render() {
    return (
      // <div className='App'>
        <div className='film-library'>
          <FilmListing
            film_list={this.state.films}
            faves={this.state.faves}
            onFaveToggle={this.handleFaveToggle}
          ></FilmListing>
          <FilmDetails film={this.state.current}></FilmDetails>
        </div>
      // </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import FilmDetails from "./FilmDetails";
// import FilmListing from "./FilmListing";
// import TMDB from "./TMDB";

// function App() {
//   return (
//     <div className='film-library'>
//       <FilmListing film_list={TMDB.films}></FilmListing>
//       <FilmDetails film_list={TMDB.films}></FilmDetails>
//     </div>
//   );
// }

// export default App;
