import React, { useState, useEffect } from 'react';
import Quiz from './Components/Quiz'
import Start from './Components/Start'

export default function App() {
  const [submit,setSubmit]=useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [questions, setQuestions] = useState([]);
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
  let Quizz = questions.map(value => {
    return <Quiz question={value.question} cor_ans={value.correct_answer} submit={submit} answers={value.options} selected={selected} key={value.correct_answer} />
  })
  function OnChange() {
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
        <div className='questions'>
          {questions.length > 0 ?
            <div>
              {Quizz}
              <button onClick={()=>setSubmit(prev=>!prev)}> {submit?"New quiz" :"Submit"}</button>
            </div>
            : <h1>Page load error</h1>}</div> : <Start OnChange={OnChange} />}

    </div>
  )
}
