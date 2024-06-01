
import React from "react"
import { Card,CardBody,CardFooter,CardHeader,Heading,StackDivider,Box,Text,Button,Stack } from "@chakra-ui/react"
import { useNavigate, useParams } from "react-router-dom";
import TicketsView from "./TicketsView";
function TicketsCard({id,title,status,assignee,priority}){
  let navigate = useNavigate()



    return (
      <Card>
  {/* <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader> */}

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          {title}
        </Heading>
        <Text pt='2' fontSize='sm'>
         Status : {status}
        </Text>
        <Text pt='2' fontSize='sm'>
       Name : {assignee}
        </Text>
        <Text pt='2' fontSize='sm'>
       Priority : {priority}
        </Text>
        <CardFooter>
      <Button variant='outline' colorScheme='red' onClick={()=>navigate(`/tickets/view/${id}`)}>
        View Ticket
      </Button>
    </CardFooter>
 
      </Box>
     
     
    </Stack>
  </CardBody>
</Card>
    )
  }
  export default TicketsCard;