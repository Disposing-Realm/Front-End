import { React, useState, useEffect, useContext } from "react";
import "./feed.css";
import Share from "../share/share.jsx";
import Posts from "../post/post.jsx";
import AppContext from "../../context/appContext.jsx";

export default function Feed() {
    const [posts, setPosts] = useState([]);
    const userInfo = useContext(AppContext)
    console.log(userInfo,"context")
    
      useEffect(() => {

        const getUrl = 'http://localhost:3001/posts/feed';
        async function fetchPost() {
          const response = await fetch(getUrl);
          const postData = await response.json();
          setPosts(postData.data);
        }
        fetchPost();
      }, [userInfo.submitText]);

    return (
        <>
        <Share/>
        <Posts/>
        <div>
            {console.log(userInfo, "Feed")}
        </div>
        </>
    )
}