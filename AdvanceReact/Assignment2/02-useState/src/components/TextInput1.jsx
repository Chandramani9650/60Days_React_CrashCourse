// src/components/TextInput1.jsx

import { useState } from "react";

function TextInput1() {
  const [text, setText] = useState("");

  return (
    <div style={{border:"1px solid red", padding:"20px" , marginTop:"10px"}}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Entered text: {text}</p>
    </div>
  );
}

export default TextInput1;
