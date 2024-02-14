// import React,{useState,useEffect} from 'react';

// export default function Quiz() {
//   let [questions,setQuestions]=useState([]);
//   let [answer,setAnswer]=useState([]);
//   useEffect(()=>{
//     console.log(questions);
//     async function get(){
//       let data=await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
//       let res= await data.json();
//       console.log(res);
//       setQuestions(res.results);
//     }
//     get();
    
    
//   },[])
// for(let i=0;i<questions.length;i++){
//     if(answer<questions.length){
//     setAnswer(prev=>{
//       return[
//         ...prev,
//       {
//         question:questions[i].question,
//         options:[
//           {
//             value:questions[i].correct_answer,
//             selected:false
//           },
//           {
//             value:questions[i].incorrect_answers[0],
//             selected:false
//           },
//           {
//             value:questions[i].incorrect_answers[1],
//             selected:false
//           },
//           {
//             value:questions[i].incorrect_answers[2],
//             selected:false
//           }
//         ]
//       } ]
//   }) } 
// } 

// let display=answer.map(data=>{
//   return <div key={data.question} className='questions'>
//     <h1>{data.question}</h1>
//     <li>{data.options[0]}</li>
//     <li>{data.options[1]}</li>
//     <li>{data.options[2]}</li>
//     <li>{data.options[3]}</li>
//     <hr/>
//   </div>
// })

//   return (
//     <div className='quiz'>{display}</div>
//   )
// }
import React from 'react'

export default function Quiz(props) {
  let correct;
  let answers=props.answers.map(res=>{
    if(props.submit){
      correct={
        backgroundColor: props.cor_ans==res.value && res.selected? "green": res.selected ?"red":"#fff"
      }
    }
    else{
      correct={
        backgroundColor: res.selected ? "blue" :"#fff"
      } 
    }

 
    return <button style={correct} key={res.value} onClick={()=>props.selected(res.value,props.question)} >{res.value}</button>
  })
  return (
    <div key={props.question}>  
       <h1>{props.question}</h1> 
       {answers}
       <hr/>
       </div>
  )
}

