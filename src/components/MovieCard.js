import React from "react";
import starImg from "../images/star.png";
const imageBaseUrl = "https://image.tmdb.org/t/p/";

const MovieCard = (props) => {
  const { poster_path, title, vote_average, release_date, id } = props;
  return (
    <div className="movie-card">
      <figure className="poster-box card-banner">
        <img
          src={`${imageBaseUrl}w342/${poster_path}`}
          alt={title}
          className="img-cover"
        />
      </figure>
      <h4 className="title">{title}</h4>
      <div className="meta-list">
        <div className="meta-item">
          <img src={starImg} alt="rating" />
          <span>{vote_average.toFixed(1)}</span>
        </div>
        <div className="card-badge">${release_date.split("-")[0]}</div>
      </div>
      <a href="" className="card-btn"></a>
    </div>
  );
};

export default MovieCard;
