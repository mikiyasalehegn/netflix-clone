import React, { useEffect, useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Nav() {
  const [show, handleShow] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="left">
        <Link to="/">
          <img
            className="nav__logo"
            onClick={() => {
              setClicked(false);
            }}
            src="https://bi-jingo.com/wp-content/uploads/2009/03/netflix-logo-png-clip-art.png"
            alt="Netflix Logo"
          />
        </Link>
        <div>
          <Link
            onClick={handleClick}
            className={`${clicked ? "clicked" : ""}`}
            to="/tv"
          >
            TV Shows
          </Link>
        </div>
        <div>
          <Link to="/">Movies</Link>
        </div>
        <div>
          <Link to="/">Categories</Link>
        </div>
      </div>
      <div className="right">
        <div className="search">
          <FaSearch size={20} />
        </div>
        <div className="menu-icon">
          <FaBars size={20} />
        </div>
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
