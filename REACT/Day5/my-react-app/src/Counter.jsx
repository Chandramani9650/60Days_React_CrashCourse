import React from 'react'
import { useState } from 'react'
import "./App.css"

const Counter = () => {
    const[count, setcounter] = useState(0)
    const[clear, setclear] = useState(null)
    const[them, setthem] = useState(false)
    function Startcounter(){
    let cl = setInterval(() => {
        setcounter(prev=>prev+1)
        setthem(true)
     }, 1000);
     setclear(cl)
     
    }
   function StopCounter(){
    clearInterval(clear)
    console.log("Stop");
    setthem(false)
   }

   

    function ResetCounter(){
        clearInterval(clear)
        console.log("reset");
        setcounter(0)
    }
    
  return (
    <div style={{width:"400px", backgroundColor:"darkgrey", padding:"20px",  margin:"auto"}}>
        <p style={{fontFamily:"sans-serif", fontSize:"24px"}}>Counter: {count}</p>
      <button onClick={Startcounter} style={them==true?{backgroundColor:"blue"}:{backgroundColor:"grey"}}>Start</button>
      <button onClick={StopCounter} style={{backgroundColor:them==true?"red":"grey"}}>Stop</button>
      <button onClick={ResetCounter}>Reset</button>
    </div>
  )
}

export default Counter
