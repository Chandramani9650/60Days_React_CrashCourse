import React from 'react'
import {Link} from 'react-router-dom'
import { Flex, Spacer, VStack } from '@chakra-ui/react'


let links = [
    {
        to:'/',
        title:"HOME"
    },
    {
        to:'/about',
        title:"ABOUT"
    },
    {
        to:'/contact',
        title:"CONTACT"
    },
    {
        to:'/tickets',
        title:"TICKETS"
    },
    {
        to:'/login',
        title:"LOGIN"
    }
   

]
const Navbar = () => {


  return (

   <VStack w='100vw'  bg='blue' color='white'>
     <Flex justifyContent='space-between' alignItems='center' w='90%'>
    {links.map((item, index)=> 
    <Link to={item.to} key={index} style={{textDecoration:"none"}}>{item.title}</Link> )}

      </Flex>
   </VStack>
  
  
   
  )
}

export default Navbar
