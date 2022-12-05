import { React, useState, useContext } from "react";
import "./share.css";
// import ImageUploading from "react-images-uploading";
import AppContext from "../../context/appContext";

export default function Share() {
    return (
        <>
            <form id="submit-form">
                <div id="post-bar">
                    <input type="text" id="post-text" name="search" size="35"  placeholder="What's on your mind?" required />
                    <button id="submit-button-post">Post</button>
                </div>
            </form>
        </>
    )
}