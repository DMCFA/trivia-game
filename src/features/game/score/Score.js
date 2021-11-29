import React from "react";

const Score = ({ score }) => {
  const currentScore = score;

  return (
    <div className="score-container">
      <h2 className="score">Your Score ➡️ {currentScore}</h2>
    </div>
  );
};

export default Score;
