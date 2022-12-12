import { React, useContext, useState, useEffect, Component } from "react";
import "./share.css";
import AppContext from "../../context/appContext";
import axios from "axios"
import { Image } from "cloudinary-react"
import ReactAvatarEditor from "react-avatar-editor";
import Resizer from "react-image-file-resizer";

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



    //       // Resize image on change handler
    //   const onChange = async (imageList) => {
    //     try {
    //       setImages(imageList);
    //       const file = imageList[0].file;
    //       const image = await resizeFile(file);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };

    //   // Resize image function
    //   const resizeFile = (file) =>
    //     new Promise(() => {
    //       Resizer.imageFileResizer(
    //         file,
    //         612,
    //         400,
    //         "JPEG",
    //         80,
    //         0,
    //         (uri) => {
    //           setTrialImage(uri)
    //         },
    //         "base64"
    //       );
    //     });

    const uploadImage = async (files, description) => {
        const httpLink = []
        // const filesCompressed = files.map((ele) => resizeFile(ele))


        for (let i = 0; i < files.length; i++) {
            // const filesCompressed = await resizeFile(files[i])
            const formData = new FormData()
            formData.append("file", files[i])
            formData.append("upload_preset", "tdfjlobt")
            const response = await axios.post(
                "https://api.cloudinary.com/v1_1/dtrzaq4sl/image/upload",
                formData
            )
            let newUrl = response.data.secure_url
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
        // console.log("parsed")

        const parsed = await result.json();
        console.log(parsed[0], "parsed")

        props.setNewPost([parsed, ...props.newPost])
        userInfo.getSubmitText(parsed)
    }

    return (
        <form id="submit-form" onSubmit={(e) => {
            e.preventDefault()
            uploadImage(e.target[0].files, e.target[1].value)
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
            <input /*onChange={handleInputChange}*/autocomplete = "off" type="text" id="post-text" name="search" size="35" placeholder="What do you want to post" required />
            {/* <button onClick={uploadImage} type="submit" value="Submit" id="submit-button-post">Post</button> */}
            <br />
            <input type="submit" />
        </form>
    )
}

