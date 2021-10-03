import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-scroll";
import Amount from "./Amount";

const Difficulty = () => {
  const [difficulty, setDifficulty] = useState("");
  const handleClick = (e) => {
    setDifficulty(e);
  };
  return (
    <div>
      <div className="difficulty">
        <h2 className="difficulty-name">How hard do you want it to be?</h2>
        <div className="difficulty-btn-group">
          <ButtonGroup aria-label="group of buttons" size="lg">
            <Link to="amount">
              <Button
                className="difficulty-btn"
                value="easy"
                onClick={(e) => handleClick(e.target.value)}
              >
                Easy
              </Button>
              <Button
                className="difficulty-btn"
                variant="success"
                value="medium"
                onClick={(e) => handleClick(e.target.value)}
              >
                Medium
              </Button>
              <Button
                className="difficulty-btn"
                variant="warning"
                onClick={(e) => handleClick(e.target.value)}
              >
                Hard
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
      <Amount />
    </div>
  );
};

export default Difficulty;
