import React from "react";
import { useDispatch } from "react-redux";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-scroll";
import Amount from "../amount/Amount";
import { difficulty } from "./difficultySlice";

const Difficulty = () => {
  const dispatch = useDispatch();

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
                onClick={(e) => dispatch(difficulty(e.target.value))}
              >
                Easy
              </Button>
              <Button
                className="difficulty-btn"
                variant="success"
                value="medium"
                onClick={(e) => dispatch(difficulty(e.target.value))}
              >
                Medium
              </Button>
              <Button
                className="difficulty-btn"
                variant="warning"
                value="hard"
                onClick={(e) => dispatch(difficulty(e.target.value))}
              >
                Hard
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
      <Amount id="amount" />
    </div>
  );
};

export default Difficulty;
