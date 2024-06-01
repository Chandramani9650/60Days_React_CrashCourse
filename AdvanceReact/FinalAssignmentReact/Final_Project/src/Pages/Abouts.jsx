import { Box,Image,Button, Container, Heading , Text, Flex} from '@chakra-ui/react'
import React from 'react'


const Abouts = () => {
  const property = {
    imageUrl: 'https://images.unsplash.com/photo-1716369416215-202c195d58a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Rear view of modern home with pool'
    
  }
  return (
   <Container  maxW='container.lg'   boxShadow='lg' mt={10}>
     <Box m='auto'  pos='relative' maxW='container.md'  mt={10} overflow='hidden' >
    
    <Image width='100%' src={property.imageUrl} alt={property.imageAlt} />
    <Box pos='absolute' top="200px" left="30px" >
    <Heading  color='white' fontSize='40px' fontWeight={1000} fontFamily='sans-serif'>Welcome to Uropian Page</Heading>
    <Text color='white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus est id reprehenderit, at corrupti, dolorem asperiores tempora ipsa error quo iure odit quas. Eligendi natus impedit, aliquid, placeat tempore pariatur nisi alias distinctio s.</Text>
  
    </Box>

     

     <Box mt={5}>
       <h2 style={{fontFamily:"sans-serif", fontSize:"20px"}}>About Us</h2>
       <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At aliquam itaque deserunt excepturi odio ea mollitia suscipit nisi soluta, unde rerum, dolores quasi corporis nemo. Est temporibus rerum cumque ducimus, enim molestiae tempore inventore reiciendis perferendis eveniet necessitatibus, iure, quam eligendi distinctio voluptate saepe. Modi eligendi cupiditate nihil! Nesciunt explicabo porro maiores voluptatem cum, perspiciatis sunt enim, ab animi accusamus vel provident facilis natus deserunt amet, consequatur illo quaerat. Ratione dolore ad consequatur possimus, necessitatibus nobis illo commodi voluptatem inventore aliquam ipsa velit tempore fuga accusamus id pariatur illum deleniti assumenda consequuntur harum facere ipsam. Eaque perspiciatis quas nemo maxime?
       </Text>
      </Box>
    </Box>
   </Container>
  )
}




export default Abouts
