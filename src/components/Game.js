import React, { useEffect } from "react";
import axios from "axios";
import getData from "../api/questions";

const Game = ({ theme, difficulty, amount }) => {
  useEffect(() => {
    const data = getData(theme, difficulty, amount);
    data.map((el) => console.log(el));
  }, [theme, amount, difficulty]);

  return <div>Hello</div>;
};

export default Game;
