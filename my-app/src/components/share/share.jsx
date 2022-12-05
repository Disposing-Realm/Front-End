import { React, useContext, useState } from "react";
import "./share.css";
// import ImageUploading from "react-images-uploading";
import AppContext from "../../context/appContext";
import { useEffect } from "react";

export default function Share() {
    const userInfo = useContext(AppContext)
    let [input, setInput] = useState("")
    let [image, setImage] = useState("")

    async function createPost(event) {
        event.preventDefault()
        userInfo.postFeed()
        const postInfo = {
            post_description: input,
            post_image: image
            // post_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Litter.JPG/1600px-Litter.JPG?20110329112532"
        };
        console.log({ postInfo })

        const result = await fetch("http://localhost:3001/posts/feed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postInfo),
        });
        const parsed = await result.json();

    };

    const handleInputChange = (event) => {
        let inputStr = event.target.value
        setInput(input = inputStr)
        userInfo.getSubmitText(userInfo.submitText = input)
    }

    const handleImageInput = (event) => {
        let imgStr = event.target.value
        // if(imgStr.slice(0, 8) !== "https://" && imgStr.length < 15) {
        //     window.alert("Invalid")
        // }
        console.log(imgStr)
        setImage(image = imgStr)
    }




    return (
        <>
            <form id="submit-form">
                <div id="post-bar">
                    <input onChange={handleImageInput} type="text" id="img-text" name="search" size="35" placeholder="Upload Image Url" required />
                    <input onChange={handleInputChange} type="text" id="post-text" name="search" size="35" placeholder="What's on your mind?" required />
                    <button onClick={createPost} type="button" id="submit-button-post">Post</button>
                </div>
            </form>
        </>
    )
}