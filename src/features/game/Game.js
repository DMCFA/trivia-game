import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getData, hasRequestFailed } from "../../api/questions";
import GameQuestion from "./gameHelper/GameQuestions";
import LoadingScreen from "./gameHelper/LoadingScreen";

const Game = () => {
  const theme = useSelector((state) => state.theme.value);
  const difficulty = useSelector((state) => state.difficulty.value);
  const amount = useSelector((state) => state.amount.value);
  const answer = useSelector((state) => state.answer.value);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const score = useSelector((state) => state.question.value);

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

  ///* update score *\\\

  return (
    <div>
      {isLoading ? <LoadingScreen /> : <GameQuestion questions={questions} />}
      <ToastContainer />
    </div>
  );
};

export default Game;
