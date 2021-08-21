import "./App.css";
import React, { useState, useEffect } from "react";
import Trivia from "./Trivia";
import Start from "./Start";
function App() {
  const [userName, setUserName] = useState(null);
    const [questionNumber, setquestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState(`$ 0`);
  // const [questionNumbers, setquestionNumbers] = useState(1)
  // const [stops, setStops] = useState(false);
  const moneyPyramid = [
    {
      id: 1,
      amount: `$ 100`,
    },
    {
      id: 2,
      amount: `$ 200`,
    },
    {
      id: 3,
      amount: `$ 300`,
    },
    {
      id: 4,
      amount: `$ 500`,
    },
    {
      id: 5,
      amount: `$ 1000`,
    },
    {
      id: 6,
      amount: `$ 2000`,
    },
    {
      id: 7,
      amount: `$ 4000`,
    },
    {
      id: 8,
      amount: `$ 8000`,
    },
    {
      id: 9,
      amount: `$ 16000`,
    },
    {
      id: 10,
      amount: `$ 32000`,
    },
    {
      id: 11,
      amount: `$ 64000`,
    },
    {
      id: 12,
      amount: `$ 125000`,
    },
    {
      id: 13,
      amount: `$ 250000`,
    },
    {
      id: 14,
      amount: `$ 500000`,
    },
    {
      id: 15,
      amount: `$ 1000000`,
    },
  ];
  moneyPyramid.reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount); // ask
  }, [moneyPyramid, questionNumber]);

  const data = [
    {
      id: 1,
      info: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      info: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      info: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  return (
    <div className="app">
      {userName ? (
        <>
           {/* <div className="Top">
            <div className="timer">
              <Timer setstop={setStop} questionNumber={questionNumber} />
            </div>
          </div>  */}
          <div className="main">
            <h1 className="showName"> Welcome {userName} </h1>
            <div className ='hidden'>
              <p>  Question: {questionNumber} </p>
              <p> Amount Earned: { earned} </p>
            </div>
            { stop ? (
              <h1 className="endText"> You earned: {earned} </h1>
            ) : (
              <>
                <div className="Bottom">
                  <Trivia
                    data={data}
                    setstop={setStop}
                    setquestionNumber={setquestionNumber}
                    questionNumber={questionNumber}
                    earned = {earned}
                  />
                </div>
                )
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((money) => {
                const { id, amount } = money;

                return (
                  <li
                    className={
                      questionNumber === id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber"> {id} </span>
                    <span className="moneyListItemAmount"> {amount} </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} /> 
      )}
    </div>
  );
}

export default App;
