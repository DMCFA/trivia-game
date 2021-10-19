import React, { useEffect } from "react";
import axios from "axios";
import getData from "../api/questions";

const Game = ({ theme, difficulty, amount }) => {
  // useEffect(() => {
  //   const data = getData(...props);
  //   data.map((el) => console.log(el));
  // }, [theme, amount, difficulty]);

  return (
    <div>
      {console.log(theme)}
      {console.log(difficulty)}
      {console.log(amount)}
    </div>
  );
};

export default Game;
