import React from 'react'
import { Flex, Spacer } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
   <Flex justifyContent='space-around'>
    <Link to='/'>Home</Link>
    <Link to='/login'>Login</Link>
    <Link to='//productdetail/:id'>Product Detail</Link>
   </Flex>
  )
}

export default Navbar
