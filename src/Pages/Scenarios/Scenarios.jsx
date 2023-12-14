import React, { useEffect } from "react";
import "./Scenarios.css";
import { Link } from "react-router-dom";
import buttonBack from "../../assets/buttons/buttonback.webp";
import soundStart from "../../assets/sounds/soundStart.mp3";


const Scenarios = () => {
  useEffect(() => {
    const sound = new Howl({ src: [soundStart] });
      sound.play();
  }, []);

  return (
    <div className="scenariosLinks">
      <Link to="/"><img src={buttonBack} className="buttonBack"/></Link>

      <div className="linkContainer colorLinkDeportes">
        <Link className="linkStyles" to={`/cardGame/:deportes`}>
          <h2 className="letterLink">Deportes</h2>
        </Link>
      </div>
      <div className="linkContainer colorLinkComida">
        <Link className="linkStyles" to={`/cardGame/comida`}>
          <h2 className="letterLink">Comida</h2>
        </Link>
      </div>
      <div className="linkContainer colorLinkProfesiones">
        <Link className="linkStyles" to={`/cardGame/profesiones`}>
          <h2 className="letterLink">Profesiones</h2>
        </Link>
      </div>
    </div>
  );
};

export default Scenarios;
