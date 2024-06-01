import React from 'react'
import { useToast } from '@chakra-ui/react'
const Logout = () => {
  let toast  = useToast()
    function Tost(){
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
    }
  return (
    <div>
      <button onClick={Tost}>click me</button>
    </div>
  )
}

export default Logout
