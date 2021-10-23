import React, { useEffect } from "react";
import axios from "axios";
import getData from "../api/questions";

const Game = ({ theme, difficulty, amount }) => {
  // useEffect(() => {
  //   const data = getData(...props);
  //   data.map((el) => console.log(el));
  // }, [theme, amount, difficulty]);

  const quiz = useEffect(() => {
    return axios.get("https://opentdb.com/api.php?amount=10");
  }, []);

  return (
    <div>
      {quiz.map((question) => (
        <span>question={question}</span>
      ))}
    </div>
  );
};

export default Game;
