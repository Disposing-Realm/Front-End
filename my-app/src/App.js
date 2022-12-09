import './App.css';
import Home from "./pages/home/home.jsx"
import Signup from "./pages/register/register.jsx"
// import Landing from "./pages/landing/landing.jsx"
import Login from "./pages/register/login.js";
// import { React, useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    let localToken = window.localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:3001/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localToken}`,
          "Content-Type": "application/json",
        },
      });
      const response = await res.json();
      response === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home setAuth={setAuth}/>} />
        {/* <Route path="/profile/:id" element={<Profile />} /> */}
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login setAuth={setAuth} />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;


