import { React, useState, useEffect, useContext } from "react";
import "./feed.css";
import Share from "../share/share.jsx";
import Post from "../post/post.jsx";
import AppContext from "../../context/appContext.jsx";

export default function Feed() {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AppContext)

    return (
        <>
        <Share/>
        <Post/>
        <div>
            {console.log(posts)}
        </div>
        </>
    )
}