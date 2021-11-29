import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getData, hasRequestFailed } from "../../api/questions";
import GameQuestion from "./gameHelper/GameQuestions";
import LoadingScreen from "./gameHelper/LoadingScreen";
import Score from "./score/Score";

const Game = () => {
  const theme = useSelector((state) => state.theme.value);
  const difficulty = useSelector((state) => state.difficulty.value);
  const amount = useSelector((state) => state.amount.value);
  const score = useSelector((state) => state.question.value);

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  ///*display questions*\\\
  useEffect(() => {
    getData(amount, theme, difficulty).then((results) => {
      setQuestions(results.results);
      setIsLoading(false);
    });
    if (hasRequestFailed) {
      toast.error("❌ Something went wrong! ❌");
    }
  }, []);

  return (
    <div>
      {isLoading ? <></> : <Score score={score} />}
      {isLoading ? <LoadingScreen /> : <GameQuestion questions={questions} />}
      <ToastContainer />
    </div>
  );
};

export default Game;
