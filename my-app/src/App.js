import './App.css';
import Home from "./pages/home/home.jsx"
import { React, useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

 function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<></>} />
        <Route path="/register" element={<></>} />
        <Route path="/profile" element={<></>} />
        <Route path="/landing" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
