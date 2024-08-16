// ScoreComponent.js
import React from "react";
import "./ScoreView.css";

const ScoreComponent = ({ handleResetClick, userScore }) => {
  console.log("User Score:", userScore);

  return (
    <div>
      <p>You scored {userScore} out of 5</p>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default ScoreComponent;
