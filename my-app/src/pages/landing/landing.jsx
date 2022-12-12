import { React, useState, useEffect, useContext} from "react";
import NavBar from "../../components/top/navbar.jsx"
import "./landing.css"
import Footer from "../../components/footer/end.jsx"
import Post from "../../components/post/post.jsx"
import Feed from "../../components/feed/feed.jsx"
import AppContext from "../../context/appContext.jsx";
import { Link } from "react-router-dom";


export default function Landing() {
    // const { user } = useContext(AppContext)

    return (
        <>
        {/* <Link to="../home"> </Link> */}
            <NavBar  />
            <Feed />
        </>
    )
}