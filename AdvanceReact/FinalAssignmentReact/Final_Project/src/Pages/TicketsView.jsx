import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Loading from '../Component/Loading';
import ErrorIndicator from '../Component/ErrorIndicator';
import { Container, Heading, Text,Card,CardBody,CardFooter,Button,CardHeader } from '@chakra-ui/react';
const TicketsView = () => {
 let {id} = useParams()
 let navigate = useNavigate()
 const [loading, setloading] = useState(false)
const [Err, setError] = useState(false)
const [data, setData] = useState([])

 async function FetchUserDetail(){
  setloading(true)
  try {
    let response = await axios({
     method:"get",
     url:`http://localhost:3000/tickets?id=${id}`
    })
    console.log(response.data);
    setData(response.data)
    setloading(false)
    
  } catch (error) {
    setError(true)
    setloading(false)
  }
 }

 useEffect(()=>{
  FetchUserDetail()
},[])
 if(loading){
  return <Loading/>
 }
if(Err){
  return <ErrorIndicator/>
}


  
  return (
   <Container mt={10}>
   
    {data.map((item)=> 
 <Card key={item.id} align='center'>
 <CardHeader>
   <Heading size='md' fontFamily='sans-serif'>{item.title.toUpperCase()}</Heading>
 </CardHeader>
 <CardBody>
   <Text fontSize="large" color='GrayText' fontFamily='sans-serif'>Issue : {item.description}</Text>
   <Text > Assignee : {item.assignee}</Text>
   <Text>Status : {item.status}</Text>
   <Text>Priority : {item.priority}</Text>

 </CardBody>
 <CardFooter>
   <Button mr={10} colorScheme='blue' onClick={()=>navigate(`/tickets/edit/${item.id}`)}>Edit</Button>
   <Button colorScheme='blue' onClick={()=>navigate(`/tickets/delete/${item.id}`)}>Delete</Button>
 </CardFooter>
</Card>  )}
    
   </Container>
  )
}

export default TicketsView
