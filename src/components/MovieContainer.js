import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieContainer = ({ selectedGenre, searchQuery }) => {
  const [todayTrending, setTodayTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [thisWeek, setThisWeek] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

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

  const handleMovieGenre = async (ID) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGM0NGQ3ZGQxMzkwMDQwNGM4NWYxMjk3MzRhZjBkZiIsInN1YiI6IjY1NjlkZTBmY2Y0OGExMDExZTI2YTJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGuD0LYD3AiCmMGyA5Q5UX7J4A6K-UvPy6Ee2CL5POs",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${ID}`,

      options
    )
      .then((response) => response.json())
      .then((response) => setGenreMovies(response.results))
      .catch((err) => console.error(err));
  };

  const fetchSearchMovies = async (query) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGM0NGQ3ZGQxMzkwMDQwNGM4NWYxMjk3MzRhZjBkZiIsInN1YiI6IjY1NjlkZTBmY2Y0OGExMDExZTI2YTJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGuD0LYD3AiCmMGyA5Q5UX7J4A6K-UvPy6Ee2CL5POs",
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e2d948b748bca3d1d70b7f539fa4d559&query=${query}&page=1&include_adult=false&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSearchedMovies(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (selectedGenre) {
      handleMovieGenre(selectedGenre.id);
    } else if (searchQuery) {
      fetchSearchMovies(searchQuery);
    }
  }, [selectedGenre, searchQuery]);

  return (
    <>
      <article className="container" style={{ padding: "24px 50px 48px" }}>
        {/* MOVIE LIST */}
        {selectedGenre === null && searchQuery === "" ? (
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
        ) : searchQuery !== "" ? (
          <section className="movie-list">
            <div className="title-wrapper">
              <h3 className="title-large">
                Total Results: {searchedMovies.length}
              </h3>
            </div>
            <div className="slider-list">
              <div className="slider-inner">
                {searchedMovies.map((movie, index) => {
                  return <MovieCard key={movie.id} {...movie} />;
                })}
              </div>
            </div>
          </section>
        ) : (
          <section className="movie-list">
            <div className="title-wrapper">
              <h3 className="title-large">All {selectedGenre.name} Movies</h3>
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
