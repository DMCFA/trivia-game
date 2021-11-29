import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";
import Theme from "./options/theme/Theme";
import dice from "./../img/dice.png";

const Begin = () => {
  return (
    <div className="main">
      <div className="begin">
        <h1 className="begin-title">
          <img className="dice-img" src={dice} alt="dice" />
          Trivia Game
          <img className="dice-img" src={dice} alt="dice" />
        </h1>
        <div className="begin-btn-group">
          <Link to="theme">
            <Button
              className="begin-btn begin-btn-pulsate"
              size="lg"
              variant="danger"
            >
              Choose my options
            </Button>
          </Link>
        </div>
      </div>
      <Theme id="theme" />
    </div>
  );
};

export default Begin;
