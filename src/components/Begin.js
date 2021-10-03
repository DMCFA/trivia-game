import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";
import Theme from "./Theme";

const Begin = () => {
  const pushDown = () => {};
  return (
    <div className="main">
      <div className="begin">
        <h1 className="begin-title">🎲 Trivia Game 🎲</h1>
        <div className="begin-btn-group">
          <Button
            className="begin-btn begin-btn-pulsate"
            size="lg"
            variant="danger"
          >
            <Link to="theme">Choose my options</Link>
          </Button>
        </div>
      </div>
      <Theme id="theme" />
    </div>
  );
};

export default Begin;
