import { React, useState, useEffect, useContext } from "react";
import "./feed.css";
import Share from "../share/share.jsx";
import Posts from "../post/post.jsx";
import AppContext from "../../context/appContext.jsx";
import Resizer from "react-image-file-resizer"

function FeedList(posts) {
    return (
        <div>
            {posts.map((ele, i) => 
                <Posts
                    key={i + 1}
                    description={ele.post_description}
                    image={ele.post_image}
                />
            )}
        </div>
    ); 
};  

function Feed() {
    const [posts, setPosts] = useState([]);
    const userInfo = useContext(AppContext)
 
    useEffect(() => {
        const getUrl = 'http://localhost:3001/posts/feed';
        console.log("whyyyyy")
        async function fetchPost() {
            const response = await fetch(getUrl);
            const postData = await response.json();
            setPosts(postData); 
            console.log("inside Whyyyyyy") 
            console.log(posts)
            console.log(postData) 
        } 
        fetchPost();
    }, [userInfo.postFeed]);   

    return (
        <div>
            <Share />
            {FeedList(posts)}
        </div>
    )
}

export default Feed;
