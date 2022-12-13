import { React, useEffect, useState, useContext } from "react";
import "./post.css";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext.jsx";
import Comments from "../comments/comment.jsx";
import { UserContext } from "../../context/userContext";


export default function Posts(props) {
    const { user } = useContext(AppContext)
    const realUser = useContext(UserContext)
    const [comments, setComments] = useState([]);
    const [newComments, setNewComments] = useState([])
    const [likes, setLikes] = useState(0)
    const [trackLikes, setTrackLikes] = useState(0)
    console.log(comments)


        const handleComment = async (commentStr) => {
            
            const postInfo = {
                post_id: props.post_id,
                commentary: commentStr
            };
            const result = await fetch("http://localhost:3001/comments/new-comment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postInfo),
            });
            const parsed = await result.json()
            setNewComments(parsed)
            console.log(parsed)
        }


    useEffect(() => {
        const getUrl = `http://localhost:3001/comments/${props.post_id}`;
        async function fetchComments() {
            const response = await fetch(getUrl);
            const commentData = await response.json();
            setComments( commentData);
        }
        fetchComments();
    }, [newComments]); 


    // const handleLikes = async () => {
    //     setLikes(likes => likes + 1)
    //     // setTrackLikes(trackLikes => trackLikes + 1)
    // }

    // useEffect(() => {
    //     setLikes(trackLikes)
    // }, [trackLikes])


    return (
        <div className="post">
            <div className="post-info">
                <div className="username">
                    <p className="username-text">Evan Lu</p>
                    <div className="timestamp">
                        <p className="timestamp-text">10 hours ago</p>
                    </div>
                </div>
            </div>
            <div className="post-content">
                <p className="post-content-text">
                    {props.description}
                </p>
            </div>
            <div className="image-container">
                <img className="posted-image" src={props.image}></img>
                <img className="posted-image" src={props.image2}></img>
            </div>

            <div className="like-comment-button-section">
                <div className="like-button-container">
                    <p /*onClick={handleLikes()}*/ className="like-button">Like</p>
                </div>
                <div className="comment-button-container">
                    <p className="comment-button">Comment</p>
                </div>
            </div>
            {/* <Comments/> */}
            {comments.map((ele, i) =>
                <Comments
                    key={i + 1}
                    comments={ele.commentary}
                />
            )}
            <div className="write-comment-section">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleComment(e.target[0].value)
                }}>
                    <div className="comment-bar">
                        <input autoComplete="off" type="text" className="comment-text" name="search" size="35" placeholder= "Write a comment..." required
                            id="commentPost" />
                        <button className="submit-comment-button">Post Comment</button>
                    </div>
                </form>
            </div>
        </div>
    )
}