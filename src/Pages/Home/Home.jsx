import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import buttonStart from "../../assets/buttons/buttonStart.png";

const Home = () => {
  return (
      <div className="homeContainer">
        <h1 className="title">Entrenemos tu vocabulario</h1>
        <Link to="/scenarios">
          <img src={buttonStart} className="buttonStart" />
        </Link>
      </div>
  );
};

export default Home;
