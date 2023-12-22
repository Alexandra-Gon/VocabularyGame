import React from 'react';
import "./ChooseGamePage.css";
import { Link } from 'react-router-dom';
 // import images
import cardsGame from "../../assets/games/cardsGame.png";
import matchGame from "../../assets/games/matchGame.png";


const ChooseGamePage = () => {
  return (
    <div className='gamesContainer'>
      <div className='gameImageContainer'>
        <Link to="/scenarios"> <img src={cardsGame} alt="cardsGame" className='gameImage'/> </Link>
      </div>
      <div className='gameImageContainer'>
        <Link to="/matchinGame"> <img src={matchGame} alt="matchGame" className='gameImage'/> </Link>
      </div>
    </div>
  )
}

export default ChooseGamePage;