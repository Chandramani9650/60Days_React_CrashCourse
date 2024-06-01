import { Box,Image,Button, Container, Heading , Text, Flex} from '@chakra-ui/react'
import React from 'react'


const Home = () => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool'
    
  }
  return (
   <Container  maxW='container.lg'   boxShadow='lg' mt={10}>
     <Box m='auto'  pos='relative' maxW='container.md'  mt={10} overflow='hidden' >
    
    <Image width='100%' src={property.imageUrl} alt={property.imageAlt} />
    <Box pos='absolute' top={[50, 150, 200]}left="30px" >
    <Heading  color='white' fontSize={[18, 20, 30]} fontWeight={1000} fontFamily='sans-serif'>We Help cannabis club find real state</Heading>
    <Text color='white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus est id reprehenderit, at corrupti, dolorem asperiores tempora ipsa error quo iure odit quas. Eligendi natus impedit, aliquid, placeat tempore pariatur nisi alias distinctio s.</Text>
   <Flex mt={4}>
   <Button colorScheme='red' mr={4} mt>Learn More</Button>
   <Button colorScheme='orange'>Login</Button>
   </Flex>
    </Box>
     

     <Box p='6'>
        <Box display='flex' alignItems='baseline'>
         
        </Box>
      </Box>
    </Box>
   </Container>
  )
}

export default Home
