import React from "react";
import "./Scenarios.css";
import { Link } from "react-router-dom";
import buttonBack from "../../assets/buttons/buttonBack.png"

const Scenarios = () => {
  return (
    <div className="scenariosLinks">
      <Link to="/"><img src={buttonBack} className="buttonBack"/></Link>

      <div className="linkContainer colorLinkDeportes">
        <Link className="linkStyles" to={`/game/deportes`}>
          <h2 className="letterLink">Deportes</h2>
        </Link>
      </div>
      <div className="linkContainer colorLinkComida">
        <Link className="linkStyles" to={`/game/comida`}>
          <h2 className="letterLink">Comida</h2>
        </Link>
      </div>
      <div className="linkContainer colorLinkProfesiones">
        <Link className="linkStyles" to={`/game/profesiones`}>
          <h2 className="letterLink">Profesiones</h2>
        </Link>
      </div>
    </div>
  );
};

export default Scenarios;
