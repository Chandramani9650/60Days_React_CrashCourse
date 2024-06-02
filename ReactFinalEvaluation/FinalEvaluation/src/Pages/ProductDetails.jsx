import { Container, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {id}  = useParams()
 const [product, setProduct] = useState([]) 
  async function fetchData(){
    try {
      let resp = await axios({
        method:"get",
        url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
      })
   setProduct(resp.data.data)
   console.log(resp.data.data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
     {product.map((item)=><Container key={item.id}>
  <Text>
    dsahdhasdhasdh
  </Text>
  
     </Container> )}
     
    </div>
  )
}

export default ProductDetails
