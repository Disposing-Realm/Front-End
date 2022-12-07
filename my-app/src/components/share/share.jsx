import { React, useContext } from "react";
import "./share.css";
import AppContext from "../../context/appContext";

export default function Share() {
    const userInfo = useContext(AppContext)

    const imgPost = (event) => {
        event.preventDefault();
        const imgSearch = event.target.value;
        userInfo.holdImage = imgSearch
    };

    const textPost = (event) => {
        event.preventDefault();
        const msgsearch = event.target.value;
        userInfo.message = msgsearch
    };

    async function createPost() {
        const postInfo = {
            post_description: userInfo.holdImage,
            post_image: userInfo.message,
        };

        const result = await fetch("http://localhost:3001/posts/feed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postInfo),
        });
        const parsed = await result.json();
    };

    return (
        <>
            <form id="submit-form">
                <div id="post-bar">
                    <input onChange={imgPost} type="text" id="img-text" name="search" size="35" placeholder="Upload Image Url" required autoComplete="off" />
                    <input onChange={textPost} type="text" id="post-text" name="search" size="35" placeholder="What's on your mind?" required autoComplete="off" />
                    <button onClick={createPost} type="button" id="submit-button-post">Post</button>
                </div>
            </form>
        </>
    )
}

