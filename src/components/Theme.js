import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-scroll";
import Difficulty from "./Difficulty";

const Theme = () => {
  const [theme, setTheme] = useState("");

  const handleClick = (e) => {
    setTheme(e);
  };
  return (
    <div>
      <div className="theme">
        <h2 className="theme-name">Choose your theme</h2>
        <div className="theme-btn-group">
          <ButtonGroup aria-label="group of buttons" size="lg">
            <Link to="difficulty">
              <Button
                className="theme-btn"
                value="books"
                onClick={(e) => handleClick(e.target.value)}
              >
                Books
              </Button>
              <Button
                className="theme-btn"
                variant="success"
                value="movies"
                onClick={(e) => handleClick(e.target.value)}
              >
                Movies
              </Button>
              <Button
                className="theme-btn"
                variant="warning"
                onClick={(e) => handleClick(e.target.value)}
              >
                TV Shows
              </Button>
              <Button
                className="theme-btn"
                variant="danger"
                onClick={(e) => handleClick(e.target.value)}
              >
                Games
              </Button>
              <Button
                className="theme-btn"
                variant="info"
                onClick={(e) => handleClick(e.target.value)}
              >
                Sports
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
      <Difficulty id="difficulty" />
    </div>
  );
};

export default Theme;
