import ResponsiveAppBar from '../../components/test.js'
import NavBar from "../../components/top/navbar.jsx"

import { React, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./register.css"
import { useEffect } from 'react';

export default function Register() {
    const [newUserSetup , setNewUserSetup ] = useState(null)
    useEffect(()=>{
        async function setNewUser(){
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RxIiwiaWF0IjoxNjcwNTE3NDY2fQ.577xiHZI2XcIAC74aBKlWKE38q-RO1BjS9CV2d6zCfQ");

            let raw = JSON.stringify(newUserSetup);

            let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("http://localhost:3001/users/register", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
        if(newUserSetup){
            setNewUser()
        }
    },[newUserSetup])
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
    // }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
      }
    function testing(e){
        e.preventDefault()
        const userInfo = {
            username: e.target[0].value,
            password: e.target[1].value,
            email: e.target[2].value,
            first_name: e.target[3].value,
            last_name: e.target[4].value
          }
        setNewUserSetup(userInfo)
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
                        type="text"
                        id="form3Example1w"
                        className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label className="formLabel" htmlFor="form3Example1w">
                        Username
                    </label>

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
                        type="email"
                        id="form3Example1w"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="formLabel" htmlFor="form3Example1w ">
                        First
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

           
                </div>

                <div className="form-outline">
                    <input
                        type="submit"
                        className="button"
                    />
                </div>

            </form>


        </>
    )
}