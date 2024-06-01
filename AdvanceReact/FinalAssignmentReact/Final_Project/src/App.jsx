import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import AllRoutes from './Component/AllRoutes'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <Navbar/>
     <AllRoutes/>
 
    </>
  )
}

export default App
