import { Button, Container, Flex, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Input,Textarea,Select, } from '@chakra-ui/react'
import axios from 'axios'
import Loading from '../Component/Loading'
import ErrorIndicator from '../Component/ErrorIndicator'
const TicketsCreate = () => {
const toast = useToast()
const [data, setdata] = useState([])
const [loading, setloading] = useState(false)
const [Err, setError] = useState(false)
const [useInput, setUseinput] = useState({
  title: "",
  description: "",
  assignee: "",
  status: "",
  priority:null
})

function Alert_AddData(){
  toast({
    title: 'Ticket Created.',
    description: "You Have Created sucessfully your ticket.",
    status: 'success',
    duration: 2000,
    isClosable: true,
  })
}

async function StoreData(){
  setloading(true)
try {
  let response = await axios({
    method:"post",
    url:"http://localhost:3000/tickets",
    data:useInput
  })
  console.log(response.data);
  setloading(false)
} catch (error) {
 setError(true)
 setloading(false) 
}
}


function HandleClick(){
setdata([useInput])
StoreData()
console.log(data);
setUseinput({
  title: "",
  description: "",
  assignee: "",
  status: "",
  priority:null
})
Alert_AddData()
}
function HandleChange(e){
const {name,value} = e.target
setUseinput({...useInput,[name]:value})
}
if(loading){
  return <Loading/>
}
if(Err){
  return <ErrorIndicator/>
}

  return (
    <Container >
       <Input  mt={5} placeholder='Enter your Subject' size='lg' name='title' value={useInput.title} onChange={HandleChange} />
       <Textarea  mt={5} placeholder='Enter your problem in details' name='description' value={useInput.description} onChange={HandleChange}/>
 <Flex>
 <Select placeholder='Select Name'  mt={5} name='assignee' value={useInput.assignee} onChange={HandleChange}>
  <option value='Rahul prajapati'>Rahul prajapati</option>
  <option value='Abhishek prajapati'>Abhishek prajapati</option>
  <option value='Chandramani maurya'>Chandramani maurya</option>
  <option value='Monu Prasad'>Monu Prasad</option>
  <option value='Akhilesh'>Akhilesh</option>
  <option value='virendra'>virendra</option>
  <option value='Mayank'>Mayank</option>
</Select>
<Select placeholder='Select Status'  mt={5} name='status' value={useInput.status} onChange={HandleChange}>
  <option value='completed'>Completed</option>
  <option value='pending'>Pending</option>
  <option value='progress'>Progress</option>
</Select>
<Select placeholder='Select Priority'  mt={5} name='priority' value={useInput.priority} onChange={HandleChange}>
  <option value='1'>1</option>
  <option value='2'>2</option>
  <option value='3'>3</option>
  <option value='4'>4</option>
  <option value='5'>5</option>
  <option value='6'>6</option>
  <option value='7'>7</option>
  <option value='8'>8</option>
  <option value='9'>9</option>
</Select>
 </Flex>
<VStack>
<Button colorScheme='orange' onClick={HandleClick} mt={5}>Create Ticket</Button>
</VStack>
    </Container>
  )
}

export default TicketsCreate
