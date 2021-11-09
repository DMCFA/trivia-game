import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import GameQuestion from "./gameHelper/GameQuestions";
import LoadingScreen from "./gameHelper/LoadingScreen";

const Game = ({ ready }) => {
  const score = useSelector((state) => state.question.value);
  const [areQuestionsReady, setAreQuestionsReady] = useState(false);

  return (
    <div>
      {ready ? <GameQuestion /> : <LoadingScreen />}
      <ToastContainer />
    </div>
  );
};

export default Game;
