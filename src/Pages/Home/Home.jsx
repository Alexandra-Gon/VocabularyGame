import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import buttonStart from "../../assets/buttons/buttonstart.webp";

const Home = () => {
  return (
      <div className="homeContainer">
        <h1 className="title">Entrenemos tu vocabulario</h1>
        <Link to="/games" >
          <img src={buttonStart} className="buttonstart"/>
        </Link>
      </div>
  );
};

export default Home;
