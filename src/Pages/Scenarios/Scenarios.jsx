import React from "react";
import "./Scenarios.css";
import { Link } from "react-router-dom";

const Scenarios = () => {
  return ( 
  <div>
    <Link to="/">Regresar</Link>
    <Link to={`/game/deportes`} >Deportes</Link>
    <Link to={`/game/comida`} >Comida</Link>
    <Link to={`/game/ropa`} >Ropa</Link>
  </div>
)
};

export default Scenarios;
