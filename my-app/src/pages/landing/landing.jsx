import { React, useState, useEffect, useContext} from "react";
import NavBar from "../../components/top/navbar.jsx"
import "./landing.css"
import Footer from "../../components/footer/end.jsx"
import Post from "../../components/post/post.jsx"
import Feed from "../../components/feed/feed.jsx"
import AppContext from "../../context/appContext.jsx";


export default function Landing() {
    const { user } = useContext(AppContext)

    return (
        <>
            <NavBar /*key={user.user_id} userInfo={user} setAuth={setAuth}*/ />
            <Feed/>
            {/* <form id="submit-form">
                <div id="post-bar">
                    <input type="text" id="post-text" name="search" size="35" autocomplete="off" placeholder="What's on your mind?" required />
                    <button id="submit-button-post">Post</button>
                </div>
            </form> */}
            <div>Hello World</div>
            <Post/>
        </>
    )
}