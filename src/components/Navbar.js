import React, { useState } from "react";
import "./Navbar.css";
import loadingImage from "../images/preloader.gif";
import movieLogo from "../images/logo.png";
import searchIcon from "../images/search.png";
import menuIcon from "../images/menu.png";
import menuCloseIcon from "../images/menu-close.png";
import Sidebar from "./Sidebar";
import MovieContainer from "./MovieContainer";

const Navbar = ({
  onHandleSearch,
  searchQuery,
  onToggle,
  isSidebarOpen,
  onClose,
}) => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <img
            src={movieLogo}
            style={{ width: "250px", height: "auto" }}
            alt="Tvflix home"
          />
        </a>

        <div className="search-box">
          <div className="search-wrapper" search-wrapper>
            <input
              type="text"
              name="search"
              value={searchQuery}
              placeholder="Search any movies..."
              className="search-field"
              onChange={(e) => onHandleSearch(e.target.value)}
            />
            <img
              src={searchIcon}
              style={{
                width: "24px",
                height: "24px",
              }}
              alt="search"
              className="leading-icon"
            />
          </div>
          {/* <button className="search-btn" search-toggler>
            <img
              src="/assets/images/close.png"
              width="24"
              height="24"
              alt="close search box"
            />
          </button> */}
        </div>
        {/* <button className="search-btn" search-toggler menu-close>
          <img
            src="/assets/images/search.png"
            width="24"
            height="24"
            alt="open search box"
          />
        </button> */}
        {isSidebarOpen ? (
          <button className="menu-btn" onClick={onClose}>
            <img
              src={menuCloseIcon}
              style={{
                width: "24px",
                height: "24px",
              }}
              alt="close menu"
              className="close"
            />
          </button>
        ) : (
          <button className="menu-btn" onClick={onToggle}>
            <img
              src={menuIcon}
              style={{
                width: "24px",
                height: "24px",
              }}
              alt="open menu"
              className="menu"
            />
          </button>
        )}
      </header>
    </>
  );
};

export default Navbar;
