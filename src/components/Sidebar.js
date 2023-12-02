import React, { useState, useEffect } from "react";

const Sidebar = ({ onSelectGenre, isSidebarOpen }) => {
  const [genres, setGenres] = useState([]);

  const fetchGenres = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGM0NGQ3ZGQxMzkwMDQwNGM4NWYxMjk3MzRhZjBkZiIsInN1YiI6IjY1NjlkZTBmY2Y0OGExMDExZTI2YTJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AGuD0LYD3AiCmMGyA5Q5UX7J4A6K-UvPy6Ee2CL5POs",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => setGenres(response.genres))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <>
      {/* SIDEBAR */}
      <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-inner" style={{ width: "85%" }}>
          <div className="sidebar-list">
            <p className="title">Genre</p>
            {/* Each genre */}
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {genres.map((genre) => {
                return (
                  <li
                    key={genre.id}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      className="sidebar-link"
                      onClick={() => onSelectGenre(genre)}
                    >
                      {genre.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
