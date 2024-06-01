import React from 'react'
import { useToast, Button,Text, Center, Heading, Box,Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Contact = () => {
   
  return (
  <Box textAlign='center' p={20}>
     <Heading>Contact Us</Heading>
    <Text fontSize={20} mt={20}>
    We know that choosing the right institute or a career path can be a difficult and tiring process, and that's why we're here for you. Contact us to ask any questions, we'll respond over email as soon as possible!
    </Text>
    <Image margin='auto' src='https://masaischool.com/images/contact/mail.svg'/>
    <Heading >Write to us at</Heading>
    <Link style={{color:"blue" ,fontSize:"25px"}} >admissions@masaischool.com</Link>

    <hr style={{marginTop:"20px", border:".5px solid black"}}/>
    <Heading w='600px' fontSize={30} m='auto' mt={30}>
    Explore our course offerings and start learning at zero upfront fees.
    </Heading>
  </Box>
  )
}

export default Contact
