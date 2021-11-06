import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Start = () => {
  const history = useHistory();
  const difficulty = useSelector((state) => state.difficulty.value);
  const theme = useSelector((state) => state.theme.value);
  const amount = useSelector((state) => state.amount.value);

  //check if all fields have been selected
  const allFieldsChecked = () => {
    if (difficulty || theme || amount === "") {
      toast.error("⚠️ Go back and select all fields!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  //go to game page
  const handleStart = () => {
    if (allFieldsChecked()) {
    } else {
      history.push("/game");
    }
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
      <ToastContainer />
    </div>
  );
};

export default Start;
