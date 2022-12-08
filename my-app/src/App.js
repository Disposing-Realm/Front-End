import './App.css';
import Home from "./pages/home/home.jsx"
import Register from "./pages/register/register.jsx"
import Landing from "./pages/landing/landing.jsx"
// import { React, useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from './pages/register/login.js'


 function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<></>} />
        <Route path="/landing" element={<Landing/>} />
      </Routes>
    </div>
  );
}

export default App;
