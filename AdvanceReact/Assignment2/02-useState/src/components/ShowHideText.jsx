// src/components/ShowHideText.jsx

import { useState } from "react";

function ShowHideText() {
  const [showText, setShowText] = useState(false);

  return (
    <div style={{border:"1px solid red", padding:"20px" , marginTop:"10px"}}>
      <button
        onClick={() => setShowText(!showText)}
      >
        Show/Hide Text
      </button>
      {showText && <p>This is a toggled text!</p>}
    </div>
  );
}

export default ShowHideText;
