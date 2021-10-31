import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import getData from "../../api/questions";
import themeChosen from "../../api/questions";
import { BackToSelectionBtn } from "./gameFunctions";

const Game = () => {
  const theme = useSelector((state) => state.theme.value);
  const difficulty = useSelector((state) => state.difficulty.value);
  const amount = useSelector((state) => state.amount.value);

  const [rightAnswer, setRightAnswer] = useState(undefined);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(1);
  const [backToSelection, setBackToSelection] = useState(false);

  useEffect(() => {
    getData(amount, theme, difficulty).then((results) => {
      setQuestions(results);
    });
  }, [amount, theme, difficulty]);

  useEffect(() => {
    if (questions.results.length === 0) {
      toast.error("You need to make choices first!");
      setBackToSelection(true);
    }
  }, [questions]);

  return (
    <div className="game-container">
      <div className="questions-container">
        {backToSelection && <BackToSelectionBtn />}
      </div>
    </div>
  );
};

export default Game;
