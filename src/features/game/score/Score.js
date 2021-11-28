import React from "react";
import { useSelector } from "react-redux";

const Score = () => {
  const score = useSelector((state) => state.question.value);

  return (
    <div className="score-container">
      <h2 className="score">Score: {score}</h2>
      {console.log(score)}
    </div>
  );
};

export default Score;
