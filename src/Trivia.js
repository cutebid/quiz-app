import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import useSound from 'use-sound'
import play from './Assets/play.mp3'
import correct from "./Assets/correct.mp3"
import wrong from "./Assets/wrong.mp3"

function Trivia({data,setstop,setquestionNumber,questionNumber}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState(null);
  const [className, setClassName] = useState("answer");
  const [timer, setTimer] = useState(30);
  const [letplay] = useSound(play);
  const [correctanswer] = useSound(correct);
  const [wronganswer] = useSound(wrong);
  

  useEffect(() => {
    letplay()
  }, [letplay])

  const delay = (duration, calBackFunc) => {
    setTimeout(() => {calBackFunc()}, duration)
  };
  const handleClick = (answer) => {
    setSelectedAnswers(answer);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(answer.correct ? "answer correct" : "answer wrong");
    });
     delay(5000, () => {
       if(answer.correct){
         correctanswer();
         delay(1000, () => {
                   setTimer(30)
                   setquestionNumber((prev) => prev + 1);
                   setSelectedAnswers(null);
         })
       }
       else {
         wronganswer();
         delay(1000, () => {
           setquestionNumber((prev) => prev - 1)
            setstop(true);

         })
       }
     });
    //  setTimeout(() => {setClassName(answer.correct? 'answer correct' : 'answer wrong')}, 3000)
  };
  useEffect(() => {
    // passing the questions
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);
  
  return (
    <>
      <div className="Top">
        <div className="timer">
          <Timer timer={timer} setTimer={setTimer} />
        </div>
      </div>
      <div className="trivia">
        <div className="question"> {question?.info}</div>
        <div className="answers">
          {question?.answers.map((answer) => {
            const { text } = answer;
            return (
              <div
                className={selectedAnswers === answer ? className : "answer"}
                onClick={() => handleClick(answer)}
              >
                {text}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Trivia;
