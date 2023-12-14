import React from "react";
import "./Nav.css";
import logoWebsite from "../../assets/logo/logoWebsite2.png";

const Nav = () => {
  return (
    <header className="header">
      <img src={logoWebsite} alt="Game website logo" className="logoWebsite"/>

      <nav className="navBar">
        <ul>
          <li>
            <a href="/" className="navBarLinks">
              Home
            </a>
          </li>
          <li>
            <a href="/games" className="navBarLinks">
              Games
            </a>
          </li>
          <li>
            <a href="/" className="navBarLinks">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
