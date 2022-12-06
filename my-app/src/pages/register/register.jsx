// import ResponsiveAppBar from '../../components/test.js'
import NavBar from "../../components/top/navbar.jsx"

import { React, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./register.css"

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("")

    // const handleSignup = async (e) => {
    //     e.preventDefault()
    //     const userInfo = {
    //       username: username,
    //       password: password,
    //       email: email,
    //       first_name: "",
    //       last_name: ""
    //     }
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }
    function testing(e){
        e.preventDefault()
        console.log(e.target)
        console.log("hi there love")
    }
    return (
        <>
            <form className="right-side" onSubmit={testing}>
                <span className="logo">Register</span>
                <div>
                    <span className="tagline">BRuuuhhhhh</span>
                </div>
                <div className="pageSwitcherS">
                    <NavLink
                        to="/login"
                        activeClassName="pageSwitcherItem-activeS"
                        className="pageSwitcherItemS"
                    >
                        Sign In
                    </NavLink>
                    <NavLink
                        exact
                        to="/signup"
                        activeClassName="pageSwitcherItem-activeS"
                        className="pageSwitcherItemS"
                    >
                        Sign Up
                    </NavLink>
                </div>
                <div className="form-outline">
                    <input
                        type="email"
                        id="form3Example1w"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="formLabel" htmlFor="form3Example1w ">
                        Email
                    </label>
                </div>

                <div className="form-outline">
                    <input
                        type="password"
                        id="form3Example1w"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                        className="formLabel"
                        htmlFor="form3Example1w"
                    >
                        Password
                    </label>
                </div>

                <div className="form-outline">
                    <input
                        type="text"
                        id="form3Example1w"
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label className="formLabel" htmlFor="form3Example1w">
                        Username
                    </label>
                </div>

                <div className="form-outline">
                    <button
                        type="submit"
                        className="button"
                        onClick={
                           handleSubmit}
                    // onClick={handleSignup}
                    >
                        Submit
                    </button>
                </div>

            </form>


        </>
    )
}