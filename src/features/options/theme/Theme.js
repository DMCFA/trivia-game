import React from "react";
import { useDispatch } from "react-redux";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-scroll";
import Difficulty from "./Difficulty";
import { theme } from "../theme/themeSlice";

const Theme = () => {
  const dispatch = useDispatch();

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
                onClick={(e) => dispatch(theme(e.target.value))}
              >
                Books
              </Button>
              <Button
                className="theme-btn"
                variant="success"
                value="movies"
                onClick={(e) => dispatch(theme(e.target.value))}
              >
                Movies
              </Button>
              <Button
                className="theme-btn"
                variant="warning"
                onClick={(e) => dispatch(theme(e.target.value))}
              >
                TV Shows
              </Button>
              <Button
                className="theme-btn"
                variant="danger"
                onClick={(e) => dispatch(theme(e.target.value))}
              >
                Games
              </Button>
              <Button
                className="theme-btn"
                variant="info"
                onClick={(e) => dispatch(theme(e.target.value))}
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
