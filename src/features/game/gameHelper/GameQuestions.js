import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  nextQuestion,
  shuffleAnswers,
  multipleAnswerButtons,
  trueOrFalseButtons,
} from "./gameFunctions";

function GameQuestion({ questions }) {
  ///*local states*\\\
  const [displayNextQuestion, setDisplayNextQuestion] = useState(true);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [questionNum, setQuestionNum] = useState(0);

  const displayQuestion = nextQuestion(questions, questionNum);

  ///*check if is true/false OR multiple answers and create buttons*\\\
  const hasMultipleAnswers = (questions) => {
    const question = questions[questionNum];
    if (question.type === "multiple") {
      const allAnswers = question.incorrect_answers.slice();
      allAnswers.push(question.correct_answer);
      shuffleAnswers(allAnswers);
      setAnswerOptions(allAnswers);
      return multipleAnswerButtons(answerOptions);
    }
    return trueOrFalseButtons();
  };

  ///*confirm if there are any more questions*\\\
  const anyQuestionsLeft = () => questionNum < questions.length - 1;

  ///*test purposes*\\\
  const testDummy = (questions) => {
    console.log(questions);
    console.log(questionNum);
    const question = questions[questionNum];
    console.log(question);
    console.log(question.type);
  };

  ///*display question*///
  return (
    <div className="game-container">
      <div className="questions-container">
        <div>
          <p className="question">{displayQuestion}</p>
        </div>
        {questions.length > 0 && hasMultipleAnswers(questions)}
      </div>
    </div>
  );
}

export default GameQuestion;
