import React from "react";
import { useDispatch } from "react-redux";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-scroll";
import Start from "../../Start";
import { amount } from "./amountSlice";

const Amount = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="amount">
        <h2 className="amount-name">How many questions should we give you?</h2>
        <div className="amount-btn-group">
          <ButtonGroup aria-label="group of buttons" size="lg">
            <Link to="start">
              <Button
                className="amount-btn"
                value="10"
                onClick={(e) => dispatch(amount(e.target.value))}
              >
                10
              </Button>
              <Button
                className="amount-btn"
                variant="success"
                value="20"
                onClick={(e) => dispatch(amount(e.target.value))}
              >
                20
              </Button>
              <Button
                className="amount-btn"
                variant="warning"
                value="30"
                onClick={(e) => dispatch(amount(e.target.value))}
              >
                30
              </Button>
              <Button
                className="amount-btn"
                variant="danger"
                value="40"
                onClick={(e) => dispatch(amount(e.target.value))}
              >
                40
              </Button>
              <Button
                className="amount-btn"
                variant="info"
                value="50"
                onClick={(e) => dispatch(amount(e.target.value))}
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
