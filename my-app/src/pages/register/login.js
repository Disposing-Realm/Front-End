import { React, useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import "./form.css"
import Navbar from "../../components/top/navbar"
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const sendCredentials = (email, password) => {
    

    fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        console.warn("Invalid Username/Password");
        throw Error("Invalid Username/Password");
      })
      .then((json) => {
        setUser(json)
        document.cookie = JSON.stringify(json)
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendCredentials(email, password)
    navigate("/landing");
  }


  return (
    <>
      <Navbar></Navbar>
      <div id="body">
        <div class="login-box">
          <h2>Login</h2>
          <form>
            <div class="user-box">
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required></input>
              <label for="email"> Email </label>
            </div>
            <div class="user-box">
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required></input>
              <label for="password"> Password </label>
              <button id = "a" onSubmit={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Log in
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

{/* <form onSubmit = {handleSubmit}>
<label for = "email"> Email </label>
<input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "Insert email"></input>
<label for = "password"> Password </label>
<input value = {password} onChange = {(e) => setPassword(e.target.value)} type = "password" placeholder = "******"></input>
<button type = "submit"> Log In </button>
</form> */}