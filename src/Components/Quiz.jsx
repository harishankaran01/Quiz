import React, { useState } from 'react'

export default function Quiz(props) {
  let correct;
  let [count,setCount]=useState(0);
  let answers=props.answers.map(res=>{
    if(props.showAnswer){
      correct={
        backgroundColor: props.cor_ans==res.value ? "rgb(74 222 128)":"#fff",
        color: props.cor_ans==res.value ? "#000":"#308cef",
      }
    }
    else if(props.submit){
      correct={
        backgroundColor: props.cor_ans==res.value && res.selected? "rgb(74 222 128)": res.selected ?"red":"#fff",
        color:props.cor_ans==res.value && res.selected? "#000": res.selected ?"#000":"#308cef",
      }
    }
    else{
      if(res.selected ){
        correct={
          backgroundColor: "#308cef",
          color:"#000"
        } 
      }
      else{
        correct={
          backgroundColor: "#FFF",
        } 
      }
      
    }
    return <button disabled={props.submit} style={correct} key={res.value} className='button' onClick={()=>props.selected(res.value,props.question)} >{res.value}</button>

  })
  return (
    <div key={props.question} className='question'>  
       <p>{props.index}.{props.question}</p> 
       <div className="answer">{answers}</div>
       </div>
  )
}

