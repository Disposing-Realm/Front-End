import { React, useState, useEffect, useContext } from "react";
import "./feed.css";
import Share from "../share/share.jsx";
import Posts from "../post/post.jsx";
import AppContext from "../../context/appContext.jsx";
import Resizer from "react-image-file-resizer"

function Feed() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState([])
    const userInfo = useContext(AppContext)
    useEffect(() => {
        const getUrl = 'http://localhost:3001/posts/feed';
        async function fetchPost() {
            const response = await fetch(getUrl);
            const postData = await response.json();
            setPosts( postData);
            console.log("this is happening")
        }
        fetchPost();
    }, [userInfo.submitText]); 


    return (
        <div>
            <Share setNewPost={setNewPost} newPost={newPost}/>
            {posts.map((ele, i) =>
                <Posts
                    key={i + 1}
                    description={ele.post_description}
                    image={ele.post_image}
                    image2={ele.post_image2}
                />
            )}
        </div>
    )
}

export default Feed;
