import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Theme = () => {
  const [theme, setTheme] = useState("");
  return (
    <div className="theme">
      <h2 className="theme-name">Choose your theme</h2>
      <Button></Button>
    </div>
  );
};

export default Theme;
