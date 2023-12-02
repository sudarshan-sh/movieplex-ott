import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MovieContainer from "../components/MovieContainer";

const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    closeSidebar();
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedGenre(null);
    closeSidebar();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <Navbar
        onHandleSearch={handleSearch}
        searchQuery={searchQuery}
        onToggle={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
      <main style={{ display: "flex" }}>
        {/* SIDEBAR */}
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <Sidebar onSelectGenre={handleGenreSelect} />
        </div>
        <div className="overlay"></div>
        <MovieContainer
          selectedGenre={selectedGenre}
          searchQuery={searchQuery}
        />
      </main>
    </div>
  );
};

export default HomePage;
