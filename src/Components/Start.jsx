import React, { useEffect, useRef, useState } from 'react';
import { LiaBrainSolid } from "react-icons/lia";
import "../index.css"


export default function Start(props) {
  const[name,setName]=useState("");
  const inputref=useRef();
  useEffect(()=>{
    inputref.current.focus();
  },[])
  return (
<div className="form">
<div className="title"> <h1>Quiz</h1> <LiaBrainSolid size={40}/></div>
  <p className="description">Challenge your brain's boundaries with a quiz marathon, where every answer unveils a new dimension of understanding.</p>
  <div>
    <input ref={inputref} placeholder="Enter your Name" type="text" onChange={(e)=>setName(e.target.value)}  id="email-address" required/>
    <button  onClick={()=>name.trim()? props.OnChange(name):alert("Please Enter Your Name")} type="submit">Get Stared</button>
  </div>
</div>
  )
}
