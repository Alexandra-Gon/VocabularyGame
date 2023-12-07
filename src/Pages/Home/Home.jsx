import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import buttonStart from "../../assets/buttons/buttonstart.webp";
import soundStart from "../../assets/sounds/soundStart.mp3";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const sound = new Howl({ src: [soundStart] });
    setSound(sound);

    return () => {
      sound.unload();
    };
  }, []);

  const handleClick = () => {
    setIsActive(!isActive);
    if (sound) {
      sound.play();
      // console.log(sound);
    }
  };

  return (
      <div className="homeContainer">
        <h1 className="title">Entrenemos tu vocabulario</h1>
        <Link to="/scenarios" >
          <img src={buttonStart} className="buttonstart" onClick={handleClick} />
        </Link>
      </div>
  );
};

export default Home;
