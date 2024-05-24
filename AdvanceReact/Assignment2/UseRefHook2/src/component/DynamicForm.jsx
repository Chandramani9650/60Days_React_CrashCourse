import React, { useEffect, useRef, useState } from 'react'

const DynamicForm = () => {
    const InputRef = useRef()
    const [formData, setFromData] = useState({
    Name:"",
    Email:"",
    Password:""
    })
  

    function HandleChange(e){
     const {name,type, value} = e.target
     setFromData({...formData,[name]:value})
     
    }

    function HandleSubmit(e){
        e.preventDefault()
        InputRef.current = formData
        console.log(InputRef.current);

    }
  return (
    <div>
      <form action="" onSubmit={HandleSubmit}>
       <input type="text" ref={InputRef} name='Name' value={formData.Name} placeholder='ENTER NAME' onChange={HandleChange}/><br />
       <input type="email" ref={InputRef} name='Email' value={formData.Email} placeholder='ENTER Email' onChange={HandleChange}/><br />
       <input type="password" ref={InputRef} name='Password' value={formData.Password} placeholder='ENTER Password' onChange={HandleChange}/><br />
     <input type="submit" />

      </form>
    </div>
  )
}

export default DynamicForm
