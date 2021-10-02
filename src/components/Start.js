import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Start = () => {
  const [theme, setTheme] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState("");
  const history = useHistory();
  const handleStart = () => {
    history.push("/game");
  };

  return (
    <div className="start-main">
      <div className="theme">
        <h2 className="theme-name">Choose your theme</h2>
        <Button></Button>
      </div>
      <div className="begin">
        <h1 className="begin-title">Trivia Game</h1>
        <Button
          className="begin-btn"
          size="lg"
          variant="success"
          onClick={handleStart}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default Start;
