import React from 'react';
import { LiaBrainSolid } from "react-icons/lia";
import "../index.css"


export default function Start(props) {
  return (
    <div className='start'>
        <div className="heading">
          <div className="heading2"> <h1>Quiz</h1> <LiaBrainSolid size={40}/></div>
       
    
      <h2>Get ready to challage your Brain </h2>

        </div>

        <button onClick={props.OnChange} className='button-86'>Start Quiz</button>
    </div>
  )
}
