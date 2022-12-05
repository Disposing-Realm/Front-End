import { React, useEffect, useState,  useContext} from "react";
// import Comments from "../comments/Comments.jsx";
import "./post.css";
// import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext.jsx";


export default function Posts({ post, posts, setPosts, userInfo }) {
    // const [like, setLike] = useState(post.like_count);
    // const [isLiked, setIsLiked] = useState(false);
    // const [isBookmarked, setIsBookmarked] = useState(false);
    // const [comments, setComments] = useState([]);
    // const [reply, setReply] = useState("");
    // const [showComment, setShowComment] = useState(false);
    const { user } = useContext(AppContext)



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
                    I am feeling tired today. This has been a long week for me. I feel
                    like the number of people who are tired is just tiring.
                </p>
            </div>
            <div className="like-comment-button-section">
                <div className="like-button-container">
                    <p className="like-button">Like</p>
                </div>
                <div className="comment-button-container">
                    <p className="comment-button">Comment</p>
                </div>
            </div>
            <div className="comments-section">
                <div className="comment-box">
                    <div className="commenter-name">
                        <p className="username-text">username</p>
                    </div>
                    <div className="commenter-comment">
                        <p className="commenter-comment-text">This is my comment</p>
                    </div>
                </div>
            </div>
            <div className="write-comment-section">
                <form>
                    <div className="comment-bar">
                        <input type="text" className="comment-text" name="search" size="35" placeholder= "Write a comment..." required
                            id="commentPost" />
                        <button className="submit-comment-button">Post Comment</button>
                    </div>
                </form>
            </div>

        </div>
    )
}