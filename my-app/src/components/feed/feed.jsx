import { React, useState, useEffect, useContext } from "react";
import "./feed.css";
import Share from "../share/share.jsx";
import Posts from "../post/post.jsx";
import AppContext from "../../context/appContext.jsx";

function FeedList(posts) {
  console.log(posts,"fetched")
  return (
    <div>
      {posts.map((ele, i) =>
        <Posts key={i + 1}/>
      )}
    </div>
  );
};

function Feed() {
  const [posts, setPosts] = useState([]);
  const userInfo = useContext(AppContext)
  console.log(userInfo, "context")

  useEffect(() => {
    const getUrl = 'http://localhost:3001/posts/feed';
    async function fetchPost() {
      const response = await fetch(getUrl);
      const postData = await response.json();
      setPosts(postData);
    }
    fetchPost();
  }, [userInfo.submitText]);
  // console.log(posts, "fetched")

  return (
    <div>
      <Share/>
      {FeedList(posts)}
    </div>
  )
}

export default Feed;