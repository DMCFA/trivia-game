import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  nextQuestion,
  shuffleAnswers,
  multipleAnswerButtons,
  trueOrFalseButtons,
} from "./gameFunctions";

function GameQuestion({ questions }) {
  ///////////////////////////////////
  //local states
  //////////////////////////////////
  const [displayNextQuestion, setDisplayNextQuestion] = useState(true);
  const [isBoolean, setIsBoolean] = useState(false);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [questionNum, setQuestionNum] = useState(0);
  const displayQuestion = nextQuestion(questions, questionNum);

  ///////////////////////////////////
  //check if question type is multiple or boolean
  //////////////////////////////////
  const hasMultipleAnswers = (questions) => {
    const question = questions[questionNum];
    if (question.type === "multiple") {
      const allAnswers = question.incorrect_answers.slice();
      allAnswers.push(question.correct_answer);
      shuffleAnswers(allAnswers);
      return allAnswers;
    }
    setIsBoolean(true);
  };

  ///////////////////////////////////
  //set answers
  //////////////////////////////////
  useEffect(() => {
    const answers = hasMultipleAnswers(questions);
    setAnswerOptions(answers);
  }, [questions]);

  ///////////////////////////////////
  //display buttons
  //////////////////////////////////
  const createButtons = () => {
    if (!isBoolean) {
      multipleAnswerButtons(answerOptions);
    }
    trueOrFalseButtons();
  };

  ///////////////////////////////////
  //confirm if there are any more questions
  //////////////////////////////////
  const anyQuestionsLeft = () => questionNum < questions.length - 1;

  ///////////////////////////////////
  //display question
  //////////////////////////////////
  return (
    <div className="game-container">
      <div className="questions-container">
        <div>
          <p className="question">{displayQuestion}</p>
        </div>
        {questions.length > 0 && createButtons()}
      </div>
    </div>
  );
}

export default GameQuestion;
