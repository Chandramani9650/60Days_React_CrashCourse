import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AuthContextProvider from './AuthContext/Authcontext.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

<ChakraProvider>
<BrowserRouter>
<AuthContextProvider>
<App />
</AuthContextProvider>
</BrowserRouter>
</ChakraProvider>
    
)
