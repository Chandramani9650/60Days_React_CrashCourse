import React from 'react'
import { Stack,Alert,AlertIcon } from '@chakra-ui/react'
const ErrorIndicator = () => {
  return (
    <Stack spacing={3} w="50%" m='auto'>
    <Alert status='error'>
      <AlertIcon />
      There was an error processing your request
    </Alert>
  
  </Stack>
  )
}

export default ErrorIndicator
