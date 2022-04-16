import React from "react";

export default function FilmDetails(props) {
  console.log("props.film", props.film);
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${props.film.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w780${props.film.poster_path}`;
  let details = (
    <div>
      <i className='material-icons'>subscriptions</i>{" "}
      <span>No film selected</span>
    </div>
  );
  if (props.film.title) {
    details = (
      <div className='film-detail is-hydrated'>
        <figure className='film-backdrop'>
          <img src={backdropUrl} alt='' />
          <h1 className='film-title'>{props.film.original_title}</h1>
        </figure>

        <div className='film-meta'>
          <h2 className='film-tagline'>{props.film.tagline}</h2>
          <p className='film-detail-overview'>
            <img
              src={posterUrl}
              className='film-detail-poster'
              alt={props.film.original_title}
            />
            {props.film.overview}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='film-details'>
      <h1 className='section-title'>DETAILS</h1>
      <div className='film-detail'>
        <p>{details}</p>
      </div>
    </div>
  );
}
