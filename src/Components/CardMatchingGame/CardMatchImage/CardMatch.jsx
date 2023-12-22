import React from 'react'
import "./CardMatch.css";


export const CardMatch = ( {nameImage} ) => {

  
  return (

    <div className='cardMatch'>
      <img src={nameImage} className='imageCardMatch'/>
    </div>
    
  )
};

export default CardMatch
 
