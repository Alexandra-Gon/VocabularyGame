import React, { useState, useEffect } from "react";
import "./Card.css";
import cardBack from "../../assets/cardBack/cardback.webp";
import { Howl } from "howler";
import soundCard from "../../assets/sounds/soundCard.mp3";

const Card = ({ image }) => {
  const [isActive, setIsActive] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const sound = new Howl({ src: [soundCard] });
    setSound(sound);

    return () => {
      sound.unload();
    };
  }, []);

  const handleClick = () => {
    setIsActive(!isActive);
    if (sound) {
      sound.play();
    }
  };

  return (
    <div className="card" role="button" onClick={handleClick}>
      {isActive ? (
        <img className="cardImageFront" src={image} />
      ) : (
        <img className="cardImageBack" src={cardBack} />
      )}
    </div>
  );
};

export default Card;
