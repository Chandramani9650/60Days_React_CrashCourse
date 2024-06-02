import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {id}  = useParams()
  
  async function fetchData(){
    try {
      let resp = await axios({
        method:"get",
        url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
      })

    } catch (error) {
      
    }
  }
  return (
    <div>
      
    </div>
  )
}

export default ProductDetails
