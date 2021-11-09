import React from "react";
import loading from "../../../img/loading.gif";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img className="loading-icon" src={loading} alt="loading circles"></img>;
    </div>
  );
};

export default LoadingScreen;
