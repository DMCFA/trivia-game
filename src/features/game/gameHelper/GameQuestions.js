import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { getData, hasRequestFailed } from "../../../api/questions";
import {
  nextQuestion,
  shuffleAnswers,
  multipleAnswerButtons,
  loadingScreen,
} from "./gameFunctions";

function GameQuestion() {
  ///*store values and local state*\\\
  const theme = useSelector((state) => state.theme.value);
  const difficulty = useSelector((state) => state.difficulty.value);
  const amount = useSelector((state) => state.amount.value);
  const [displayNextQuestion, setDisplayNextQuestion] = useState(true);
  const [questions, setQuestions] = useState({});
  const [isGameReady, setIsGameReady] = useState(false);
  const [answerOptions, setAnswerOptions] = useState();
  const [questionNum, setQuestionNum] = useState(0);

  ///*display questions*\\\
  useEffect(() => {
    getData(amount, theme, difficulty).then((results) => {
      setQuestions(results.results);
      setIsGameReady(true);
    });
    if (hasRequestFailed) {
      toast.error("❌ Something went wrong! ❌");
    }
  }, [amount, theme, difficulty]);

  const displayQuestion = nextQuestion(questions, questionNum);

  ///*check if is true/false OR multiple answers and create buttons*///
  const hasMultipleAnswers = (allQuestions) => {
    const question = allQuestions[questionNum];
    if (question.type === "multiple") {
      const allAnswers = question.incorrect_answers.slice();
      allAnswers.push(question.correct_answer);
      shuffleAnswers(allAnswers);
      setAnswerOptions(allAnswers);
    }
    return false;
  };

  ///*create buttons for questions*///
  const createAnswerButtons = () => {
    const answersArray = hasMultipleAnswers();
    if (answersArray) {
      return multipleAnswerButtons(answerOptions);
    } else {
      console.log("boolean");
    }
  };

  ///*display question*///
  return (
    <div className="game-container">
      <div className="questions-container">
        <p className="question">
          {displayQuestion} ready={isGameReady}
        </p>
      </div>
    </div>
  );
}

export default GameQuestion;
