import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MovieContainer from "../components/MovieContainer";

const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <Navbar />
      <main style={{ display: "flex" }}>
        {/* SIDEBAR */}
        <Sidebar onSelectGenre={handleGenreSelect} />
        <div className="overlay"></div>
        <MovieContainer selectedGenre={selectedGenre} />
      </main>
    </div>
  );
};

export default HomePage;
