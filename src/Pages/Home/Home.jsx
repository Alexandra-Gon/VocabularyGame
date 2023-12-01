import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="title">Entrenemos tu vocabulario</h1>
      <Link to="/scenarios" className="startButton" >INICIAR</Link>
    </div>
  );
};

export default Home;
