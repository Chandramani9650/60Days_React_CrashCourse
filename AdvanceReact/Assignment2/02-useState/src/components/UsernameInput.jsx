// src/components/UsernameInput.jsx

import { useState } from "react";

function UsernameInput() {
  const [username, setUsername] = useState("");

  return (
    <div style={{border:"1px solid red", padding:"20px", marginTop:"10px"}}>
      <input
        type="text"
        value={username}
        onChange={(e) =>setUsername(e.target.value)}
      />
      <p>Username: {username.toLowerCase()}</p>
    </div>
  );
}

export default UsernameInput;
