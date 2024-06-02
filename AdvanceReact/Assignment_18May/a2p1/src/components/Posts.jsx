import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    try {
     const response = await axios({
      method:"get",
      url:"https://reqres.in/api/users"
     })
     setPosts(response?.data?.data)
     console.log(posts);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
    }
  

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  // useEffect(()=>{
  //   fetchAndUpdateData()
  // },[])
  return (
    <div>
      <h1>List of Posts</h1>
      <button onClick={fetchAndUpdateData}>
        Click to display list of posts
      </button>
      {/*Complete the missing code*/}
      {posts.map(post => (
        <Post key={post.id} title={post.first_name} body={post.last_name} />
      ))}
    </div>
  );
}

export default Posts;