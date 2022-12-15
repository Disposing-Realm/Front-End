import { React, useEffect, useState, useContext } from "react";
import "./post.css";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext.jsx";
import Comments from "../comments/comment.jsx";
import { UserContext } from "../../context/userContext";
import { AiFillHeart, AiOutlineUser } from 'react-icons/ai';
import { BiCommentDetail } from "react-icons/bi"
import { VscAccount } from "react-icons/vsc";


export default function Posts(props) {
    const { user } = useContext(AppContext)
    const realUser = useContext(UserContext)
    const [comments, setComments] = useState([]);
    const [newComments, setNewComments] = useState([])
    const [likes, setLikes] = useState(0)
    const [trackLikes, setTrackLikes] = useState(0)
    let date = props.post_date.slice(5, 10)
    const [open, setOpen] = useState(false);



    const convertTimeZone = (time) => {
        let hour = +time.slice(0, 2)
        hour -= 5
        let returnedTime = 0
        if (hour < 0) {
            hour = 24 - hour
        }

        if (hour > 12) {
            returnedTime = `${hour - 12}${time.slice(2, 5)} PM`
            return returnedTime
        } else {
            returnedTime = `${hour}${time.slice(2, 5)} AM`
            return returnedTime
        }

    }
    let finalTime = convertTimeZone(props.post_date.slice(11, 16))



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
    }


    useEffect(() => {
        const getUrl = `http://localhost:3001/comments/${props.post_id}`;
        async function fetchComments() {
            const response = await fetch(getUrl);
            const commentData = await response.json();
            setComments(commentData);
        }
        fetchComments();
    }, [newComments]);


    // const handleLikes = async () => {
    //     setLikes(likes => likes + 1)
    //     // setTrackLikes(trackLikes => trackLikes + 1)
    // }

    // useEffect(() => {
    //     setLikes( likes += 1)
    // }, [trackLikes])


    return (
        <div className="post">
            <div className="post-info">
                <div className="username">
                    <p className="username-text">
                        <AiOutlineUser className="profile"/>   
                        Dreyes</p>
                </div>
            </div>
            <div className="post-content">
                <p className="post-content-text">
                    {props.description}
                </p>
            </div>
            <div className="line"></div>
            <div className="image-container">
                <img className="posted-image" src={props.image}></img>
                <img className="posted-image" src={props.image2}></img>
            </div>
            <div className="line"></div>
            <div className="timestamp">
                        <p className="posts-date">{date}</p>
                        <p className="timestamp-text">{finalTime}</p>
                    </div>
            <div className="like-comment-button-section">
                <div className="like-button-container" style={{height:"10px"}}>
                    <AiFillHeart onClick={() => { setLikes(likes => likes + 1) }} className="like-button" />
                </div>

                <div className="comment-button-container" style={{height:"10px"}}>
                    <BiCommentDetail onClick={() => {
                        setOpen(!open);
                    }} className="comment-button" />
                </div>
            </div>
            <p className="likes-post">{likes} likes</p>
            <div className="write-comment-section">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleComment(e.target[0].value)
                }}>
                    <div className="comment-bar">
                        <input autoComplete="off" type="text" className="comment-text" name="search" size="35" placeholder="Enter Comment..." required
                            id="commentPost" />
                        {/* <button className="submit-comment-button">✩Post Comment✩</button> */}
                    </div>
                </form>
            </div>
            {/* <Comments/> */}
            {comments.map((ele, i) =>
                <div id={open ? "noComment" : "allComment"}>
                    <Comments
                        key={i + 1}
                        comments={ele.commentary}
                    />
                </div>
            )}
            <script src="https://kit.fontawesome.com/c53ca3821a.js" crossorigin="anonymous"></script>
        </div>
    )
}