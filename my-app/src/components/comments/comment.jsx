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
        <>
            <div className="comments-section">
                <div className="comment-box">
                    <div className="commenter-name">
                        <p className="username-text">Delvin Reyes<br/></p>
                    </div>
                    <div className="commenter-comment">
                        <p className="commenter-comment-text">{props.comments}</p>
                    </div>
                </div>
            </div>
        </>
        )}