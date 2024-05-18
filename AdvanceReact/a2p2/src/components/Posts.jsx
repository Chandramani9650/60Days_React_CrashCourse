import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    setLoading(true)
      /*Complete the missing code*/
    
    try {
        /*Complete the missing code*/
      let response = await axios.post("https://reqres.in/api/users",{
        title:"hello world get your response",
        body:"welcome"
      })
      setPosts([...posts, response.data])
   setLoading(false)
    } catch (error) {
      {
        /*Complete the missing code*/
      }
      setError(true)
      setLoading(false)
    }
  }

useEffect(()=>{
  fetchAndUpdateData()
},[])

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>

      {/*Complete the missing code*/}
      {posts.map((item, index)=>
      <Post key={index} title={item.title} body={item.body}/>)}
    </div>
  );
}

export default Posts;
