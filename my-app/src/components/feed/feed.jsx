import { React, useState, useEffect, useContext } from "react";
import "./feed.css";
import Share from "../share/share.jsx";
import Posts from "../post/post.jsx";
import AppContext from "../../context/appContext.jsx";

export default function Feed() {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AppContext)

    useEffect(() => {
        fetch("http://localhost:3001/posts/feed")
          .then((response) => response.json())
          .then((data) => 
        //   setPosts(data.data)
        console.log(data, "feed data")
          );
      }, []);


    return (
        <>
        <Share/>
        <Posts/>
        <div>
            {console.log(user, "Feed")}
        </div>
        </>
    )
}