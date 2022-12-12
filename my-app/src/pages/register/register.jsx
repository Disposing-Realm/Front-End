
import NavBar from "../../components/top/navbar.jsx";
import { React, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("")
  const navigate = useNavigate();
  // const [isSubmitted, setIsSubmitted] = useState(false);

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
    registerUser();
    // setIsSubmitted(true);
    navigate("/login");

  };

  return (
    <div >
    <form onSubmit = {handleSubmit}>
      <label for = "Name"> First Name </label>
      <input value = {firstName} onChange = {(e) => setFirstName(e.target.value)} type = "name" placeholder = "first name" required></input>
      <label for = "Name"> Last Name </label>
      <input value = {lastName} onChange = {(e) => setLastName(e.target.value)} type = "name" placeholder = "last name" required></input>
      <label for = "Username">Username </label>
      <input value = {userName} onChange = {(e) => setUsername(e.target.value)} type = "Username" placeholder = "Username" required></input>
      <label for = "email"> Email </label>
      <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "Insert email" required></input>
      <label for = "password"> Password </label>
      <input value = {password} onChange = {(e) => setPassword(e.target.value)} type = "password" placeholder = "******" required></input>
      <button type = "submit"> Register </button>
    </form>
    </div>

    
  );
}
