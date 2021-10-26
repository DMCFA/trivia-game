import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import getData from "../../api/questions";

const Game = () => {
  const theme = useSelector((state) => state.theme.value);
  const difficulty = useSelector((state) => state.difficulty.value);
  return <div></div>;
};

export default Game;
