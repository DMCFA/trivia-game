import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increment } from "./answerSlice";

import {
  nextQuestion,
  shuffleAnswers,
  multipleAnswerButtons,
  trueOrFalseButtons,
  storeAnswer,
} from "./gameFunctions";

function GameQuestion({ questions }) {
  ///////////////////////////////////
  //local states
  //////////////////////////////////
  const [displayNextQuestion, setDisplayNextQuestion] = useState(true);
  const [isBoolean, setIsBoolean] = useState(false);
  const [answerOptions, setAnswerOptions] = useState([]);
  const [questionNum, setQuestionNum] = useState(0);

  const dispatch = useDispatch();
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
  const createButtons = (answers) => {
    if (!isBoolean) {
      return multipleAnswerButtons(answers);
    }
    return trueOrFalseButtons();
  };

  ///////////////////////////////////
  //update score
  //////////////////////////////////
  const updateScore = () => {
    const question = questions[questionNum];
    if (storeAnswer === question.correct_answer) {
      dispatch(increment());
    }
  };

  ///////////////////////////////////
  //confirm if there are any more questions
  //////////////////////////////////
  const anyQuestionsLeft = () => questionNum < questions.length - 1;

  ///////////////////////////////////
  //display next question
  //////////////////////////////////

  return (
    <div className="game-container">
      <div className="questions-container">
        <div className="question">
          <p>{displayQuestion}</p>
          <div>{createButtons(answerOptions)}</div>
        </div>
      </div>
    </div>
  );
}

export default GameQuestion;
