import React, { useState } from "react"
import './App.css';
import Home from "./pages/home/home.jsx"
// import Signup from "./pages/register/register.jsx"
// import Landing from "./pages/landing/landing.jsx"
import { Login } from "./pages/register/login.js";
import { Register } from "./pages/register/register.jsx"
import { UserProvider } from "./context/userContext";


function App() {
  const [currForm, setCurrForm] = useState('login')
  const toggleForm = (formName) => {
    setCurrForm(formName)
  }

  return (
    <UserProvider>
      <div className = "App">
        {
          currForm === "login" ? <Login onFormSwitch = {toggleForm}/> : <Register onFormSwitch = {toggleForm} />
        }
      </div>
    </UserProvider>
  );
}

export default App;