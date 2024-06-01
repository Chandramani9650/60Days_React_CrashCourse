import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../Component/Loading'
import ErrorIndicator from '../Component/ErrorIndicator'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'

const TicketsDelete = () => {
  const {id} = useParams()
  const [loading, setloading] = useState(false)
  const [Err, setError] = useState(false)
  const toast = useToast()
  const navigate = useNavigate('')
  function Toast(){
    toast({
      title: 'Ticket Delete.',
      description: "Your tickets deleted sucessfully.",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
 navigate('/tickets')
  }
  
  // console.log(id, "jkhasdhahdahdhdhdgdhg");

  async function FetchUserDetail(){
    setloading(true)
    try {
      let response = await axios({
       method:"delete",
       url:`http://localhost:3000/tickets/${id}`
      })
      console.log(response.data);
   
      setloading(false)
      
    } catch (error) {
      setError(true)
      setloading(false)
    }
   }
  
   useEffect(()=>{
    FetchUserDetail()
    Toast()
  },[])
   if(loading){
    return <Loading/>
   }
  if(Err){
    return <ErrorIndicator/>
  }
  
  return (
    <div>
      
    </div>
  )
}

export default TicketsDelete
