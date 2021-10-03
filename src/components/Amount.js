import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-scroll";

import Start from "./Start";

const Amount = () => {
  const [amount, setAmount] = useState("");
  const handleClick = (e) => {
    setAmount(e);
  };
  return (
    <div>
      <div className="amount">
        <h2 className="amount-name">How many questions should we give you?</h2>
        <div className="amount-btn-group">
          <ButtonGroup aria-label="group of buttons" size="lg">
            <Link to="start">
              <Button
                className="amount-btn"
                value="easy"
                onClick={(e) => handleClick(e.target.value)}
              >
                10
              </Button>
              <Button
                className="amount-btn"
                variant="success"
                value="medium"
                onClick={(e) => handleClick(e.target.value)}
              >
                20
              </Button>
              <Button
                className="amount-btn"
                variant="warning"
                onClick={(e) => handleClick(e.target.value)}
              >
                30
              </Button>
              <Button
                className="amount-btn"
                variant="danger"
                onClick={(e) => handleClick(e.target.value)}
              >
                40
              </Button>
              <Button
                className="amount-btn"
                variant="info"
                onClick={(e) => handleClick(e.target.value)}
              >
                50
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
      <Start />
    </div>
  );
};

export default Amount;
