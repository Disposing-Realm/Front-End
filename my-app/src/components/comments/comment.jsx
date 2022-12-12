import { React, useContext, useState, useEffect } from "react";
import "./comments.css";
import AppContext from "../../context/appContext";

export default function Comments(props) {
    const userInfo = useContext(AppContext)
    const [comment, setComment] = useState([])

        // useEffect(() => {
        //     const getUrl = 'http://localhost:3001/comments';
        //     async function fetchPost() {
        //         const response = await fetch(getUrl);
        //         const commentData = await response.json();
        //         setComment(commentData);
        //     }
        //     fetchPost();
        //     console.log(userInfo)
        // }, []);
    
    return (
        <div>
            <div className="comments-section">
                <div className="comment-box">
                    <div className="commenter-name">
                        <p className="username-text">username<br/></p>
                    </div>
                    <div className="commenter-comment">
                        <p className="commenter-comment-text">This is my comment</p>
                    </div>
                </div>
            </div>
            <div className="write-comment-section">
                <form>
                    <div className="comment-bar">
                        <input autoComplete="off" type="text" className="comment-text" name="search" size="35" placeholder= "Write a comment..." required
                            id="commentPost" />
                        <button className="submit-comment-button">Post Comment</button>
                    </div>
                </form>
            </div>
        </div>
        )}