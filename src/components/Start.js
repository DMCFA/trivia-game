import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import Theme from "./Theme";
import Difficulty from "./Difficulty";
import Amount from "./Amount";

const Start = () => {
  const history = useHistory();
  const handleStart = () => {
    history.push("/game");
  };

  return (
    <div className="start-main">
      <Theme />
      <Difficulty />
      <Amount />
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
