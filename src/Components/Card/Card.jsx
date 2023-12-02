import React, { useState } from "react";
import "./Card.css";

const Card = ({ image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      {isActive ? <div
        className="card"
        role="button"
        onClick={() => setIsActive(!isActive)}
      >
        <img
          className="cardImage"
          src={image}
        />
       
      </div> : <div
        className="card"
        role="button"
        onClick={() => setIsActive(!isActive)}
      >
        <img
          className="cardImage"
          src="https://png.pngtree.com/background/20211217/original/pngtree-golden-green-mandala-art-background-with-border-invitation-card-wedding-islamic-picture-image_1596372.jpg"
        />
      </div> }
    </div>
  );
};

export default Card;
