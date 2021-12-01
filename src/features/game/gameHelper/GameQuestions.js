import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { ButtonGroup, Button } from "react-bootstrap";
import { increment } from "./../score/scoreSlice";

import { nextQuestion, shuffleAnswers } from "./helperFunctions/gameFunctions";

function GameQuestion({ questions }) {
  ///////////////////////////////////
  //local states
  //////////////////////////////////
  const [answerOptions, setAnswerOptions] = useState([]);
  const [questionNum, setQuestionNum] = useState(0);

  ///////////////////////////////////
  //set boolean value and state
  //////////////////////////////////
  const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => {
      setValue((v) => !v);
    }, []);
    return [value, toggle];
  };

  const [isBoolean, toggleIsOn] = useToggle();

  const dispatch = useDispatch();
  const history = useHistory();

  const displayQuestion = nextQuestion(questions, questionNum);

  ///////////////////////////////////
  //set answers
  //////////////////////////////////
  useEffect(() => {
    (async () => {
      const answers = await hasMultipleAnswers(questions);
      if (!isBoolean) {
        setAnswerOptions(answers);
      }
    })();
  }, [questionNum]);

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
    toggleIsOn();
  };

  ///* create buttons for multiple answers* \\\
  const multipleAnswerButtons = (answerOptions) => {
    return (
      <ButtonGroup aria-label="group of buttons" size="lg">
        <Button
          className="answers-btn"
          variant="dark"
          value={answerOptions[0]}
          onClick={(e) => processAnswer(e)}
        >
          {answerOptions[0]}
        </Button>
        <Button
          className="answers-btn"
          variant="dark"
          value={answerOptions[1]}
          onClick={(e) => processAnswer(e)}
        >
          {answerOptions[1]}
        </Button>
        <Button
          className="answers-btn"
          variant="dark"
          value={answerOptions[2]}
          onClick={(e) => processAnswer(e)}
        >
          {answerOptions[2]}
        </Button>
        <Button
          className="answers-btn"
          variant="dark"
          value={answerOptions[3]}
          onClick={(e) => processAnswer(e)}
        >
          {answerOptions[3]}
        </Button>
      </ButtonGroup>
    );
  };

  ///* create buttons for true or false answers* \\\
  const trueOrFalseButtons = () => {
    return (
      <ButtonGroup aria-label="group of buttons" size="lg">
        <Button
          className="answers-btn-boolean"
          variant="success"
          value="True"
          onClick={(e) => {
            processAnswer(e);
          }}
        >
          True
        </Button>
        <Button
          className="answers-btn-boolean"
          variant="danger"
          value="False"
          onClick={(e) => processAnswer(e)}
        >
          False
        </Button>
      </ButtonGroup>
    );
  };

  ///////////////////////////////////
  //update score
  //////////////////////////////////
  const updateScore = (answer) => {
    const currentAnswer = answer;
    const question = questions[questionNum];
    if (currentAnswer === question.correct_answer) {
      dispatch(increment());
    }
  };

  ///////////////////////////////////
  //answer button clicked and next question
  //////////////////////////////////
  const processAnswer = (e) => {
    e.preventDefault();
    const answer = e.target.value;
    updateScore(answer);
    setQuestionNum(questionNum + 1);
    if (!anyMoreQuestions) {
      history.push("/final");
    }
  };

  ///////////////////////////////////
  //check if there are any more questions
  //////////////////////////////////
  const anyMoreQuestions = () => {
    return questionNum < questions.length - 1;
  };

  return (
    <div className="game-container">
      <div className="questions-container">
        <div className="question">
          <p>{anyMoreQuestions && displayQuestion}</p>
          <div>
            {isBoolean
              ? trueOrFalseButtons()
              : multipleAnswerButtons(answerOptions)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameQuestion;
