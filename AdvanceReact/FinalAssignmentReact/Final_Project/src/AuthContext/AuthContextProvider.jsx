import React, { createContext, useState } from 'react'

export const Valcontext = createContext()
const AuthContextProvider = (props) => {
    const[Authdetail, setAuthdetail] = useState({
      isLoggedin:false,
      token:null
    })
    const login = (token)=>setAuthdetail({
      isLoggedin:true,
      token:token
    })
      
   const logout = ()=>setAuthdetail({
  isLoggedin:false,
  token:null
   })


  return (
   <Valcontext.Provider value={{
   Authdetail,
   setAuthdetail,
   login,
   logout
   }}>
    {props.children}

   </Valcontext.Provider>
  )
}

export default AuthContextProvider
