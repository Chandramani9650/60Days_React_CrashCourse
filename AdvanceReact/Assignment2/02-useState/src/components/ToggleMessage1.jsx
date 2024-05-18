// src/components/ToggleMessage1.jsx

import { useState } from "react";

function ToggleMessage1() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{border:"1px solid red", padding:"20px" , marginTop:"10px"}}>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>
      {isVisible && <p>Hello, World!</p>}
    </div>
  );
}

export default ToggleMessage1;
