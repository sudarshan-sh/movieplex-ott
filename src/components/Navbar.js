import React, { useState } from "react";
import "./Navbar.css";
import loadingImage from "../images/preloader.gif";
import movieLogo from "../images/logo.png";
import searchIcon from "../images/search.png";
import menuIcon from "../images/menu.png";
import menuCloseIcon from "../images/menu-close.png";
import Sidebar from "./Sidebar";
import MovieContainer from "./MovieContainer";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // if(isLoading){
  //   return (
  //     <main>
  //       <img src={loadingImage} alt="loadingImg" />
  //     </main>
  //   )
  // }

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
              placeholder="Search any movies..."
              className="search-field"
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
        <button className="menu-btn">
          {!isSidebarOpen ? (
            <img
              src={menuIcon}
              style={{
                width: "24px",
                height: "24px",
              }}
              alt="open menu"
              className="menu"
            />
          ) : (
            <img
              src={menuCloseIcon}
              style={{
                width: "24px",
                height: "24px",
              }}
              alt="close menu"
              className="close"
            />
          )}
        </button>
      </header>
    </>
  );
};

export default Navbar;
