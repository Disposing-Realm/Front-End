
import NavBar from "../../components/top/navbar.jsx";
import { React, useState, useEffect } from "react";
import { redirect } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitted(true);

  };

  useEffect(() => {
    if (isSubmitted) {
     redirect('/login');
    }
  }, [isSubmitted]);

  return (
    <div className="auth-form-container">
    <form onSubmit = {handleSubmit}>
      <label for = "Name"> First Name </label>
      <input value = {firstName} onChange = {(e) => setFirstName(e.target.value)} type = "name" placeholder = "first name" ></input>
      <label for = "Name"> Last Name </label>
      <input value = {lastName} onChange = {(e) => setLastName(e.target.value)} type = "name" placeholder = "last name" ></input>
      <label for = "Username">Username </label>
      <input value = {userName} onChange = {(e) => setUsername(e.target.value)} type = "Username" placeholder = "Username" ></input>
      <label for = "email"> Email </label>
      <input value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "Insert email"></input>
      <label for = "password"> Password </label>
      <input value = {password} onChange = {(e) => setPassword(e.target.value)} type = "password" placeholder = "******"></input>
      <button type = "submit"> Log In </button>
    </form>
    <button onClick = {() => props.onFormSwitch('login')}> Already have an account? Log In</button>
    </div>

    
  );
}
