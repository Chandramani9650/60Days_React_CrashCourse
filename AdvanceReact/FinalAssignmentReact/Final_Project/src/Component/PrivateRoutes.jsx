import React, { useContext } from 'react'
import { Valcontext } from '../AuthContext/AuthContextProvider'
import Login from '../Pages/Login'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const { Authdetail, setAuthdetail,login, logout} = useContext(Valcontext)
    // console.log(Authdetail.isLoggedin = true);
  
  return (
    <div>
      {Authdetail.isLoggedin?children:<Navigate to='/login'/>}
    </div>
  )
}

export default PrivateRoutes
