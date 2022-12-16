import { React, useState, useEffect, useContext } from "react";
import "./feed.css";
import Share from "../share/share.jsx";
import Posts from "../post/post.jsx";
import AppContext from "../../context/appContext.jsx";
import { mapUsers } from "../../utils";
// import Resizer from "react-image-file-resizer"

function Feed() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState([]);
  const [users, setUsers] = useState([]);
  const userInfo = useContext(AppContext);

  useEffect(() => {
    const getUrl = "http://localhost:3001/posts/feed";
    async function fetchPost() {
      const response = await fetch(getUrl);
      const postData = await response.json();
      setPosts(postData);
    }
    fetchPost();
  }, [userInfo.submitText]);

  async function fetchUsers() {
    const response = await fetch("http://localhost:3001/users");
    const userData = await response.json();
    setUsers(userData);
  }

  useEffect(() => {
    fetchUsers();
  }, []);


  
  return (
    <div>
      <Share setNewPost={setNewPost} newPost={newPost} />
      {mapUsers(posts, users).map((ele) => (
        <Posts
          key={ele.post_id}
          description={ele.post_description}
          image={ele.post_image}
          image2={ele.post_image2}
          post_id={ele.post_id}
          post_date={ele.post_date}
					userInfo={ele.userInfo}
					allUsers={users}
        />
      ))}
    </div>
  );
}

export default Feed;
