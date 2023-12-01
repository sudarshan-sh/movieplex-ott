import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MovieContainer from "../components/MovieContainer";

const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedGenre(null);
  };

  return (
    <div>
      <Navbar onHandleSearch={handleSearch} searchQuery={searchQuery} />
      <main style={{ display: "flex" }}>
        {/* SIDEBAR */}
        <Sidebar onSelectGenre={handleGenreSelect} />
        <div className="overlay"></div>
        <MovieContainer selectedGenre={selectedGenre} searchQuery={searchQuery} />
      </main>
    </div>
  );
};

export default HomePage;
