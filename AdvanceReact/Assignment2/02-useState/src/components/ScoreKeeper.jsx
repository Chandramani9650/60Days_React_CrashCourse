// src/components/ScoreKeeper.jsx

import { useState } from "react";

function ScoreKeeper() {
  const [score, setScore] = useState(0);

  return (
    <div style={{border:"1px solid red", padding:"20px" , marginTop:"10px"}}>
      <p>Score: {score}</p>
      <button
        onClick={() =>setScore(score+5)}
      >
        Increase by 5
      </button>
      <button
        onClick={() => setScore(score-5)}
      >
        Decrease by 5
      </button>
    </div>
  );
}

export default ScoreKeeper;
