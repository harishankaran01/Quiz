import React, { useState } from 'react';
import { LiaBrainSolid } from "react-icons/lia";
import "../index.css"


export default function Start(props) {
  const[name,setName]=useState("");
  return (
<form class="form">
<div className="title"> <h1>Quiz</h1> <LiaBrainSolid size={40}/></div>
  {/* <span class="title">Subscribe to our newsletter.</span> */}
  <p class="description">Challenge your brain's boundaries with a quiz marathon, where every answer unveils a new dimension of understanding.</p>
  <div>
    <input placeholder="Enter your Name" type="text" onChange={(e)=>setName(e.target.value)}  id="email-address" required/>
    <button onClick={()=>props.OnChange(name)} type="submit">Get Stared</button>
  </div>
</form>
  )
}
