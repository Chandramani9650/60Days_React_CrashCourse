import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Container, Flex, Button, SimpleGrid,Select } from '@chakra-ui/react'
import axios from 'axios'
import Loading from '../Component/Loading'
import ErrorIndicator from '../Component/ErrorIndicator'
import TicketsCard from './TicketCard'
const Tickets = () => {
const navigate = useNavigate()
const [loading, setloading] = useState(false)
const [Err, setError] = useState(false)
const [data, setData] = useState([])
const [sortdata, setSortdata] = useState("")
const [filterdata, setfilterdata] = useState("")


async function fetchData(sortdata,filterdata){
 console.log(sortdata);
  setloading(true)
  const query = {}
  if(sortdata){
    query._sort = "priority";
    query._order = sortdata

  }
  if(filterdata){
    query.status = filterdata
    console.log(filterdata);


  }
try {
  let response  = await axios({
    method:"get",
    url:"http://localhost:3000/tickets",
    params:query
  })
  setData(response?.data)
 console.log(response.data);
  setloading(false)
} catch (error) {  
  setError(true)
  setloading(false)

}
if(loading){
  return(<Loading/>)
}
if(Err){
  return (<ErrorIndicator/>)
}
}
useEffect(()=>{
  fetchData(sortdata,filterdata)
},[sortdata,filterdata])


  

  return (
<Container maxW='container.xl'>
  <Flex flexDirection='row-reverse'>
   <Button marginY = {5} bg='red' textColor='white' fontSize='x-large' _hover={{bg:'green'}} onClick={()=>navigate('/tickets_create')}>Create Ticket</Button>
  </Flex>
  <Flex gap={5} marginY={3}>
  <Select placeholder='Select option' onChange={(e)=>{
    setSortdata(e.target.value)
  }}>
      <option value='asc'>Low To High</option>
  <option value='desc'>High To Low</option>
  
 
</Select>
<Select placeholder='Select option' onChange={(e)=>{
  setfilterdata(e.target.value)
}}>
  <option value='pending'>Pending</option>
  <option value='complete'>Complete</option>
  <option value='progress'>Progress</option>
</Select>
  </Flex>
<SimpleGrid columns={{base:1,md:2,lg:3}} spacing={6}>
{data?.map((item,index)=> 
<TicketsCard key={item.id} {...item}/> )}
</SimpleGrid>
</Container>
  )
}

export default Tickets
