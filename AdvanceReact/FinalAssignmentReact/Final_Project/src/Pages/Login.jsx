import React, { useContext, useEffect } from 'react'

import { 
    Center,
    VStack,
    Box, 
    HStack,
    Stack,
    Input,
    Heading,
    Button, 
    FormControl,
    FormLabel,
    useToast


 } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Valcontext } from '../AuthContext/AuthContextProvider'



const Login = () => {
//manage State of user input
const [userlog, setuserlog] = useState({
    email:"",
    password:"" 
})
const {Authdetail,login,logout} = useContext(Valcontext)

const navigate = useNavigate()

const toast = useToast()
// Handle user input
function HandleChange(e){
 const {name,value} = e.target
 setuserlog({...userlog,[name]:value})
}

async function fetchLogin(){
 try {
  let response = await axios({
    method:"post",
    url:"https://reqres.in/api/login",
    data:userlog
  })
console.log(response.data.token);
  login(response?.data?.token);
  console.log(Authdetail);
  if(Authdetail.isLoggedin==true){
    
  toast({
    title:"login sucessful",
    description:"",
    status:"success",
    duration:2000
  })
  navigate('/')
  }else{
    toast({
      title:"Email or password wrong ",
      description:"Once try again",
      duration:2000
    })
  }
 } catch (error) {
  toast({
    title:"Something went wrong Please enter right email and password",
    description:"Once try again",
    duration:2000
  })
 }
 
}

// Handle submit button of user
function HandleSubmit(e){
e.preventDefault()
console.log(userlog);

fetchLogin()
//popup sucessful login and navigate to Home page


}

  return (

<VStack spacing='240px'  mt={20}>
<Stack spacing={5} w={[300, 400, 500]}>
<Heading>Login Here</Heading>
<form action=""  onSubmit={HandleSubmit}>
<FormControl>
  <FormLabel>Email address</FormLabel>
  
  <Input p={4} type='email' placeholder='Enter your mail' name='email' value={userlog.email} onChange={HandleChange} />
  <FormLabel>Password address</FormLabel>
<Input p={4} type='password' placeholder='Enter your mail' name='password' value={userlog.password} onChange={HandleChange}/>
<center>
<Button type='submit' p={4} mt={2} w='100%'>LOGIN</Button>
<Button  p={4} mt={2} w='100%' onClick={()=>{
  logout;
  toast({
    title:"logout sucessful",
    description:"",
    status:"success",
    duration:2000
  })
}} disabled = {Authdetail.isLoggedin==true}>LOGOUT</Button>

</center>
 
</FormControl>
</form>
  
</Stack>
</VStack>

  )
}

export default Login
