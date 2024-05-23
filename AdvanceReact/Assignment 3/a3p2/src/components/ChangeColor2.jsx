// src/components/ChangeColor2.jsx

import { useRef } from "react";

function ChangeColor2() {
  const divRef = useRef(null);
  const dirv = useRef(null);
  const handleChangeColor = () => {
    // complete the missing code
    divRef.current.style.backgroundColor = "blue"
    // dirv.current.style.backgroundColor = "red"
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      >
        Color Box
      </div>
      <button onClick={handleChangeColor} ref={dirv}>Change Color</button>
    </div>
  );
}

export default ChangeColor2;
