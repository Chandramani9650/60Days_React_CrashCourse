// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    /*Complete the missing code*/
    let cleanup = setInterval(()=>{
    setCount((prev)=>{
      if(prev>=10){
        clearInterval(cleanup)
        return prev
      }
      return prev+1


    })
    function ClearInterval(){
      clearInterval(cleanup)
    
    }
    return ClearInterval

   
    },1000)
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
