import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import GameQuestion from "./gameHelper/gameQuestions";

const Game = () => {
  ///*get final score*\\\
  const score = useSelector((state) => state.question.value);

  return (
    <div>
      <GameQuestion />
      <ToastContainer />
    </div>
  );
};

export default Game;
