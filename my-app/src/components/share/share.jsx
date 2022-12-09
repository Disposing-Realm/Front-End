import { React, useContext, useState, useEffect, Component } from "react";
import "./share.css";
import AppContext from "../../context/appContext";
import axios from "axios"
import { Image } from "cloudinary-react"
import ReactAvatarEditor from "react-avatar-editor";

export default function Share(props) {
    const form = document.querySelector("form");
    const userInfo = useContext(AppContext)
    let [input, setInput] = useState("")
    let [imageSelected, setImage] = useState("")

    async function createPost(event) {
        //     userInfo.postFeed()
        //     const postInfo = {
        //         post_description: input,
        //         post_image: image
        //         // post_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Litter.JPG/1600px-Litter.JPG?20110329112532"
        //     };
        //     console.log({ postInfo })

        //     const result = await fetch("http://localhost:3001/posts/feed", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(postInfo),
        //     });
        //     const parsed = await result.json();
    };

    // const handleInputChange = (event) => {
    //     let inputStr = event.target.value
    //     setInput(input = inputStr)
    //     userInfo.getSubmitText(userInfo.submitText = input)
    // }

    const uploadImage = async (files, description) => {
        const httpLink = []
        for (let i = 0; i < files.length; i++) {
            const formData = new FormData()
            formData.append("file", files[i])
            formData.append("upload_preset", "tdfjlobt")
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dtrzaq4sl/image/upload",
                formData
            )
            httpLink.push(response.data.secure_url)
        }
        console.log("does j")

        const postInfo = {
            post_description: description,
            post_image: httpLink[0],
            post_image2: httpLink[1]
        };

        const result = await fetch("http://localhost:3001/posts/feed", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postInfo),
        });
        // console.log("parsed")

        const parsed = await result.json();
        console.log(parsed)
        
        props.setNewPost(description)
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            uploadImage(e.target[0].files, e.target[1].value )
            userInfo.getSubmitText(e.target[1].value)
        }
        }>
            <label htmlFor="file">Choose a before and after photo to upload</label>
            <br />
            <input onChange={(event) => {
                // setImage(event.target.files[0])
                // console.log("setImage is supposedly being invoked")
                // console.log(event.target.files[0])
                // console.log(imageSelected)
                //debugger
            }} type="file" multiple />
            <br />
            {/* <button onClick={uploadImage}>Upload Image</button> */}

            {/* <input onChange={handleImageInput} type="text" id="img-text" name="search" size="35" placeholder="Upload Image Url" required /> */}
            <input /*onChange={handleInputChange}*/ type="text" id="post-text" name="search" size="35" placeholder="What do you want to post" required />
            {/* <button onClick={uploadImage} type="submit" value="Submit" id="submit-button-post">Post</button> */}
            <br />
            <input type="submit" />
        </form>
    )
}

