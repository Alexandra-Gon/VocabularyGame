import React from 'react'
import "./CardWord.css";

const CardWord = ({name}) => {
  return (
    <div className='cardWord'>
      <h2>{name}</h2>
    </div>
  )
}

export default CardWord;