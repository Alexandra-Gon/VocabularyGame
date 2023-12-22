import React from "react";
import "./Nav.css";
import logoWebsite from "../../assets/logo/logoWebsite2.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
      <img src={logoWebsite} alt="Game website logo" className="logoWebsite" />

      <nav className="navBar">
        <ul>
          <li>
            <Link to="/" className="navBarLinks">
              Home
            </Link>
          </li>
          <li>
            <Link to="/games" className="navBarLinks">
              Games
            </Link>
          </li>
          {/* <li>
            <Link to="/" className="navBarLinks">
              About
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
