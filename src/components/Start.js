import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Start = ({ theme, difficulty, amount }) => {
  const history = useHistory();
  const handleStart = () => {
    history.push({
      pathname: "/game",
      state: { theme, difficulty, amount },
    });
  };
  return (
    <div className="start">
      <h2 className="start-title">Ready to Go?</h2>
      <div className="start-btn-group">
        <Button
          className="start-btn"
          size="lg"
          variant="success"
          onClick={handleStart}
        >
          Start
        </Button>
      </div>
    </div>
  );
};

export default Start;
