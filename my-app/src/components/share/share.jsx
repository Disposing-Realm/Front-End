import { React, useContext, useState, useEffect, Component } from "react";
import "./share.css";
import AppContext from "../../context/appContext";
import axios from "axios"
import { Image } from "cloudinary-react"
import ReactAvatarEditor from "react-avatar-editor";
// import Resizer from "react-image-file-resizer";

export default function Share(props) {
    const form = document.querySelector("form");
    const userInfo = useContext(AppContext)
    let [input, setInput] = useState("")
    let [imageSelected, setImage] = useState("")

    const uploadImage = async (files, description) => {
        const httpLink = []
        const promises = []

        for (let i = 0; i < files.length; i++) {
            // const filesCompressed = await resizeFile(files[i])
            const formData = new FormData()
            formData.append("file", files[i])
            formData.append("upload_preset", "tdfjlobt")
            promises.push(await axios.post(
                "https://api.cloudinary.com/v1_1/dtrzaq4sl/image/upload",
                formData
            ))
        }

        for(let i = 0; i < promises.length; i++) {
            let newUrl = promises[i].data.secure_url
            newUrl = newUrl.slice(newUrl.length - 4, newUrl.length) === "heic" ? newUrl.slice(0, newUrl.length - 4) + "jpg" : newUrl
            httpLink.push(newUrl)
        }

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
        const parsed = await result.json();
        props.setNewPost([parsed, ...props.newPost])
        userInfo.getSubmitText(parsed)
    }

    return (
        <form id="submit-form" onSubmit={(e) => {
            e.preventDefault()
            uploadImage(e.target[0].files, e.target[1].value)
        }}>
            <label htmlFor="file">Choose a before and after photo to upload</label>
            <br />
            <input id="file-input" type="file" multiple />
            <br />
            <input id="descript" autoComplete="off" type="text" name="search" size="35" placeholder="What do you want to post" required />
            <br />
            <input id="submit-button" type="submit" />
        </form>
    )
}

