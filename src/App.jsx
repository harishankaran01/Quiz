import React, { useState, useEffect } from 'react';
import Quiz from './Components/Quiz'
import Start from './Components/Start'

export default function App() {
  const [submit,setSubmit]=useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const[user,setUser]=useState("");
  const [questions, setQuestions] = useState([]);
  const [showAnswer,setShowAnswer]=useState(false);
  useEffect(() => {
    async function get() {
      try {
        let data = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
        let res = await data.json();
        let data1 = res.results.map(prev => {
          return {
            question: prev.question,
            correct_answer: prev.correct_answer,
            options: [
              {
                value: prev.correct_answer,
                selected: false
              },
              {
                value: prev.incorrect_answers[0],
                selected: false
              },
              {
                value: prev.incorrect_answers[1],
                selected: false
              },
              {
                value: prev.incorrect_answers[2],
                selected: false
              }
            ]
          }
        })
        setQuestions(data1);
      }
      catch {

      }
    }
    get();
  }, [])
  let Quizz = questions.map((value,index) => {
    return <Quiz question={value.question} index={index+1} cor_ans={value.correct_answer} submit={submit} answers={value.options} selected={selected} key={value.correct_answer} showAnswer={showAnswer} />
  })
  function OnChange(name) {
    setUser(name);
    setIsTrue(prev => !prev)
  }
  function selected(answer, question) {
    setQuestions(data => {
      let updated = data.filter(res => {
        return res.options.filter(ans => {
          if (res.question == question) {
            if (ans.value == answer) {
              ans.selected = true;
            }
            else {
              ans.selected = false
            }
          }
        })
      })
      return updated
    })
  }
  return (
    <div className='app'>
      {isTrue ?
      <div className="Quizz">
       
        <h1>Quiz</h1>
        <div className="user">
         <p>UserName:{user}</p>
         </div>
        <div className='questions'>
          {questions.length > 0 ?
            <div>
              {Quizz}
              <div className="btns">
              <button onClick={()=>setSubmit(prev=>!prev)} className='subbutton'> {submit?"New quiz" :"Submit"}</button>
              {submit?<button onClick={()=>setShowAnswer(prev=>!prev)} className='checkbutton'>Show Answer</button>:""}
              </div>
              
            </div>
            : <h1>Page load error</h1>}</div></div> : <Start OnChange={OnChange} />}

    </div>
  )
}
