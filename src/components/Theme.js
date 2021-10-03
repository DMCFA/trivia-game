import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

const Theme = () => {
  const [theme, setTheme] = useState("");
  return (
    <div className="theme">
      <h2 className="theme-name">Choose your theme</h2>
      <div className="theme-btn-group">
        <ButtonGroup aria-label="group of buttons" size="lg">
          <Button className="theme-btn" onClick={() => setTheme("books")}>
            Books
          </Button>
          <Button
            className="theme-btn"
            variant="success"
            onClick={() => setTheme("movies")}
          >
            Movies
          </Button>
          <Button
            className="theme-btn"
            variant="warning"
            onClick={() => setTheme("tv")}
          >
            TV Shows
          </Button>
          <Button
            className="theme-btn"
            variant="danger"
            onClick={() => setTheme("games")}
          >
            Games
          </Button>
          <Button
            className="theme-btn"
            variant="info"
            onClick={() => setTheme("sports")}
          >
            Sports
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Theme;
