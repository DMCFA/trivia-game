import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getData, hasRequestFail } from "../../api/questions";
import GameQuestion from "./gameHelper/GameQuestions";
import { BackToSelectionBtn } from "./gameHelper/gameFunctions";

const Game = () => {
  const theme = useSelector((state) => state.theme.value);
  const difficulty = useSelector((state) => state.difficulty.value);
  const amount = useSelector((state) => state.amount.value);

  const [rightAnswer, setRightAnswer] = useState(undefined);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [backToSelection, setBackToSelection] = useState(false);

  useEffect(() => {
    getData(amount, theme, difficulty).then((results) => {
      setQuestions(results.results);
    });
  }, [amount, theme, difficulty]);

  useEffect(() => {
    if (hasRequestFail) {
      toast.error("You need to make choices first!");
      setBackToSelection(true);
    }
  }, []);

  return (
    <div>
      {backToSelection && <BackToSelectionBtn selection={backToSelection} />}
      <GameQuestion questions={questions} />
    </div>
  );
};

export default Game;
