import { React, useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";


export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const sendCredentials = (email, password) => {
    debugger

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
    <div >
    <form onSubmit = {handleSubmit}>
      <label for = "email"> Email </label>
      <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "Insert email"></input>
      <label for = "password"> Password </label>
      <input value = {password} onChange = {(e) => setPassword(e.target.value)} type = "password" placeholder = "******"></input>
      <button type = "submit"> Log In </button>
    </form>
    </div>

  )

}