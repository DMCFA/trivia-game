import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Amount = () => {
  const [amount, setAmount] = useState("");
  return (
    <div className="amount">
      <h2 className="amount-name">Pick the amount of questions</h2>
      <Button></Button>
    </div>
  );
};

export default Amount;
