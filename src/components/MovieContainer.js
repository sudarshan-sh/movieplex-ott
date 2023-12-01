import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

// const todayTrending =
//   "https://api.themoviedb.org/3/movie/top_rated?api_key=e2d948b748bca3d1d70b7f539fa4d559&page=1";

const MovieContainer = ({ selectedGenre }) => {
  console.log(selectedGenre);
  const [todayTrending, setTodayTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [thisWeek, setThisWeek] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);

  // For TODAY TRENDING MOVIES
  const fetchTodaysMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGM0NGQ3ZGQxMzkwMDQwNGM4NWYxMjk3MzRhZjBkZiIsInN1YiI6IjY1NjlkZTBmY2Y0OGExMDExZTI2YTJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGuD0LYD3AiCmMGyA5Q5UX7J4A6K-UvPy6Ee2CL5POs",
      },
    };
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => setTodayTrending(response.results))
      .catch((err) => console.error(err));
  };

  // For UPCOMING MOVIES
  const fetchUpcomingMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGM0NGQ3ZGQxMzkwMDQwNGM4NWYxMjk3MzRhZjBkZiIsInN1YiI6IjY1NjlkZTBmY2Y0OGExMDExZTI2YTJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGuD0LYD3AiCmMGyA5Q5UX7J4A6K-UvPy6Ee2CL5POs",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setUpcoming(response.results))
      .catch((err) => console.error(err));
  };

  // For This WEEK TRENDING
  const fetchThisWeekTrendingMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGM0NGQ3ZGQxMzkwMDQwNGM4NWYxMjk3MzRhZjBkZiIsInN1YiI6IjY1NjlkZTBmY2Y0OGExMDExZTI2YTJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGuD0LYD3AiCmMGyA5Q5UX7J4A6K-UvPy6Ee2CL5POs",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setThisWeek(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTodaysMovies();
    fetchUpcomingMovies();
    fetchThisWeekTrendingMovies();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectMovieGenre = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGM0NGQ3ZGQxMzkwMDQwNGM4NWYxMjk3MzRhZjBkZiIsInN1YiI6IjY1NjlkZTBmY2Y0OGExMDExZTI2YTJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGuD0LYD3AiCmMGyA5Q5UX7J4A6K-UvPy6Ee2CL5POs",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${selectedGenre}`,

      options
    )
      .then((response) => response.json())
      .then((response) => setGenreMovies(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    selectMovieGenre();
  }, [selectMovieGenre, selectedGenre]);

  return (
    <>
      <article className="container" style={{ padding: "24px 50px 48px" }}>
        {/* MOVIE LIST */}
        {selectedGenre === null ? (
          <>
            <section className="movie-list">
              <div className="title-wrapper">
                <h3 className="title-large">Today's Trending Movies</h3>
              </div>
              <div className="slider-list">
                <div className="slider-inner">
                  {todayTrending.map((movie, index) => {
                    return <MovieCard key={movie.id} {...movie} />;
                  })}
                </div>
              </div>
            </section>
            <section className="movie-list">
              <div className="title-wrapper">
                <h3 className="title-large">Upcoming Movies</h3>
              </div>
              <div className="slider-list">
                <div className="slider-inner">
                  {upcoming.map((movie, index) => {
                    return <MovieCard key={movie.id} {...movie} />;
                  })}
                </div>
              </div>
            </section>
            <section className="movie-list">
              <div className="title-wrapper">
                <h3 className="title-large">This Week's Trending Movies</h3>
              </div>
              <div className="slider-list">
                <div className="slider-inner">
                  {thisWeek.map((movie, index) => {
                    return <MovieCard key={movie.id} {...movie} />;
                  })}
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="movie-list">
            <div className="title-wrapper">
              <h3 className="title-large">All {selectedGenre} Movies</h3>
            </div>
            <div className="slider-list">
              <div className="slider-inner">
                {genreMovies.map((movie, index) => {
                  return <MovieCard key={movie.id} {...movie} />;
                })}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
};

export default MovieContainer;
