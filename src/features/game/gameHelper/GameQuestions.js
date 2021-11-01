import React, { useState } from "react";

function GameQuestion({ questions }) {
  //props and state
  const allQuestions = questions;
  const [displayNextQuestion, setDisplayNextQuestion] = useState(true);
  let questionNum = 0;

  //call and parse next question to be displayed
  const nextQuestion = () => {
    const parser = new DOMParser();
    setTimeout(() => {
      const question = allQuestions[questionNum].question;
      const parsedQuestion = parser.parseFromString(question, "text/html").body
        .textContent;
      return parsedQuestion;
    }, 1000);
  };

  const something = setTimeout(() => {
    nextQuestion();
  }, 1000);
  //display question
  return (
    <div>
      <div>
        <p>{something}</p>
      </div>
    </div>
  );
}

export default GameQuestion;
