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
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto/75ca25328aed42fc8f67ae3d012a7b76_9366/Balon_de_Basquet_de_Caucho_X_3_Rayas_Naranja_HM4970_01_standard.jpg"
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
