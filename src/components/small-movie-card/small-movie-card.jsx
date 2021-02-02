import React from "react";
import PropTypes from 'prop-types';

const SmallMovieCard = (props) => {
  const {movieTitle, movieSmallCover} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={movieSmallCover} alt={movieTitle} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {movieTitle}
        </a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieSmallCover: PropTypes.string.isRequired
};

export default SmallMovieCard;
