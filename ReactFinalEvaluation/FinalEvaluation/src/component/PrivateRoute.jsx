import React, { useContext } from 'react'
import { ValContext } from '../AuthContext/Authcontext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isAuth} = useContext(ValContext)
    // console.log(isAuth.isAuthenticated = true)
  return (
    <div>
      {isAuth.isAuthenticated?children:<Navigate to='/login'/>}
    </div>
  )
}

export default PrivateRoute
