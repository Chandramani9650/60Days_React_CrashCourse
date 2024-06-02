import { Card,Text, CardBody, SimpleGrid, VStack, Image, CardFooter, Button, Flex ,Select} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../component/Loading'
import AlerError from '../component/AlerError'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
const [loading, setloading]  = useState(false)
const [err, seterr] = useState(false)
const [Product, setProduct] = useState([])
const [sortdata,setsortData] = useState("")
const [filterdata,setfilterData] = useState("")

  async function fetchData(sortdata,filterdata){

  console.log(sortdata);
   setloading(true)
   const query = {}
   if(sortdata){
     query.sort = "price";
     query.order = sortdata
 
   }
   if(filterdata){
     query.filter = filterdata
     console.log(filterdata);
 
 
   }
  setloading(true)
  try {
    let resp = await axios({
      method:"get",
      url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products",
      params:query
    })
    console.log(resp.data.data)
    setProduct(resp.data.data)
    setloading(false)
  } catch (error) {
    setloading(false)
    seterr(true)
  }
  }

  useEffect(()=>{
    fetchData(sortdata,filterdata)
  },[sortdata,filterdata])
  if(loading){
    return <Loading/>
  }
  if(err){
  return <AlerError/>
  }
  return (
  <VStack>

    <Flex>
    <Select placeholder='Select option' onChange = {(e)=>setsortData(e.target.value)}>
  <option value='asc'>Low to High</option>
  <option value='desc'>High TO Low</option>
  </Select>
  <Select placeholder='Select option' onChange = {(e)=>setfilterData(e.target.value)}>
  <option value='men'>MEN</option>
  <option value='women'>WOMEN</option>
  <option value='kids'>KID</option>
  <option value='homedecor'>HomeDecor</option>

  </Select>
    </Flex>
    <SimpleGrid  columns={[1,2,3]} spacing={10}>
   {Product.map((item)=> 
  <Card key={item.id}>
    <CardBody>
      <Image src={item.image}/>
      <Text>
        {item.title}
      </Text>
      <Text>
        Category: {item.category}
      </Text>
      <Text>
       Price:  {item.price}
      </Text>
    </CardBody>
    <CardFooter>
      <Button onClick={()=>navigate(`/productdetail/${item.id}`)}>More Details</Button>
    </CardFooter>
  </Card> )}
  </SimpleGrid>
  </VStack>
  )
}

export default Home
