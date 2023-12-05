import React, { useState } from "react";
import "./Card.css";
import cardBack from "../../assets/cardBack/cardBack.png";

const Card = ({ image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="card" role="button" onClick={() => setIsActive(!isActive)}>
      {isActive ? (
        <img className="cardImageFront" src={image} />
      ) : (
        <img className="cardImageBack" src={cardBack} />
      )}
    </div>
  );
};

export default Card;
