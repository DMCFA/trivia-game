import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Button } from "react-bootstrap";

const Final = () => {
  const score = useSelector((state) => state.question.value);
  const history = useHistory();

  const handleClick = () => history.push("/");
  return (
    <div className="final-container">
      <h1 className="final-screen">You got {score} answers right!</h1>
      <Button
        type="button"
        className="start-over btn btn-light"
        onClick={handleClick}
      >
        Start Over?
      </Button>
    </div>
  );
};

export default Final;
