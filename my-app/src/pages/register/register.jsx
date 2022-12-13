
import { React, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import Navbar from "../../components/top/navbar"
import "./form.css"
import {Link} from "react-router-dom"

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("")
  const navigate = useNavigate();

  function registerUser() {
    fetch("http://localhost:3001/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: userName,
        email: email,
        password: password,
      }),
    });
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("submit is working")
    registerUser();
    navigate("/login");

  };

  return (
    <>
      <Navbar></Navbar>
      <div id="body">
        <div class="login-box">
        <br></br>
        <br></br>
        <br></br>
          <h2>Register</h2>
          <form>
            <div class="user-box">
              <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="name" required></input>
              <label for="Name"> First Name </label>
            </div>
            <div class="user-box">
              <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="name" required></input>
              <label for="Name"> Last Name </label>
              <div class="user-box">
                <input value={userName} onChange={(e) => setUsername(e.target.value)} type="Username"  required></input>
                <label for="Username">Username </label>
              </div>
              <div class="user-box">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required></input>
                <label for="email"> Email </label>
              </div>
              <div class="user-box">
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"  required></input>
                <label for="password"> Password </label>
              </div>
              <button id ="a" onClick={handleSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
