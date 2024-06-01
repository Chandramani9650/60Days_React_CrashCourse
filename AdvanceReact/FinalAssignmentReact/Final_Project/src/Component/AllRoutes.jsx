import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Abouts from '../Pages/Abouts'
import Home from '../Pages/Home'
import Tickets from '../Pages/Tickets'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'
import TicketsCreate from '../Pages/TicketsCreate'
import TicketsDelete from '../Pages/TicketsDelete'
import TicketsEdit from '../Pages/TicketsEdit'
import TicketsView from '../Pages/TicketsView'
import PrivateRoutes from './PrivateRoutes'
 

const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<PrivateRoutes><Contact/></PrivateRoutes>}/>
    <Route path='/about' element={<PrivateRoutes><Abouts/></PrivateRoutes>}/>
    <Route path='/tickets' element={<PrivateRoutes><Tickets/></PrivateRoutes>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/tickets_create' element={<TicketsCreate/>}/>
    <Route path='/tickets/delete/:id' element={<TicketsDelete/>}/>
    <Route path='/tickets/edit/:id' element={<TicketsEdit/>}/>
    <Route path='/tickets/view/:id' element={<TicketsView/>}/>
   </Routes>
  )
}

export default AllRoutes
