import React from 'react'
import "./Game.css";
import { Link, useParams } from 'react-router-dom';
import Card from '../../Components/Card/Card';

const Game = () => {
  const { parameter } = useParams();
  console.log(parameter);

  return (
    <div className='game'>
      <Link to="/scenarios">Regresar</Link>
      <h1>Entrenemos tu vocabulario</h1>
      <h2>{parameter}</h2>
      <div className='cardContainer'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Game;