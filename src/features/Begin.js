import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";
import Theme from "./options/theme/Theme";

const Begin = () => {
  return (
    <div className="main">
      <div className="begin">
        <h1 className="begin-title">🎲 Trivia Game 🎲</h1>
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
