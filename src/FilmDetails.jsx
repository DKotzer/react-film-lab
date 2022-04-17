import React from "react";

export default function FilmDetails(props) {
  console.log("props.film", props.film);
  console.log("faves list", props.fave_status);
  const backdropUrl = `https://image.tmdb.org/t/p/w1280${props.film.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w780${props.film.poster_path}`;
  let details = (
    <div>
      <i className='material-icons'>subscriptions</i>{" "}
      <span>No film selected</span>
    </div>
  );

  let fave_icon = "";
  if (props.fave_status === true) {
    fave_icon = "♡";
  }

  let submit_review = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj.reviewInput);
    props.film.review = formDataObj.reviewInput;
    console.log("review test", props.film.review);
    if (props.film.review) {
      review_area = (
        <div className='reviewarea'>
          <p>{props.film.review}</p>
        </div>
      );
    }
  };
  let review_area = (
    <div className='reviewarea'>
      <h5>Enter Review</h5>
      <form onSubmit={submit_review}>
        <textarea
          name='reviewInput'
          id='review-input'
          cols='30'
          rows='10'
        ></textarea>
        <button variant='primary' type='submit'>
          Submit Review
        </button>
      </form>
    </div>
  );
  if (props.film.review) {
    review_area = (
      <div className='reviewarea'>
        <p>{props.film.review}</p>
      </div>
    );
  }

  if (props.film.title) {
    details = (
      <div className='film-detail is-hydrated'>
        <figure className='film-backdrop'>
          <img src={backdropUrl} alt='' />
          <h1 className='film-title'>
            {props.film.original_title}
            {fave_icon}
          </h1>
        </figure>

        <div className='film-meta'>
          <h2 className='film-tagline'>{props.film.tagline}</h2>
          <div className='film-detail-overview'>
            <img
              src={posterUrl}
              className='film-detail-poster'
              alt={props.film.original_title}
            />
            {props.film.overview}
          </div>
        </div>
        {review_area}
      </div>
    );
  }

  return (
    <div className='film-details'>
      <h1 className='section-title'>DETAILS</h1>
      <div className='film-detail'>
        <div>{details}</div>
      </div>
    </div>
  );
}
