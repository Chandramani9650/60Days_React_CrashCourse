import { useState } from 'react'
import Navbar from './component/Navbar'
import AllRoutes from './component/AllRoutes'

// import './App.css'

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
