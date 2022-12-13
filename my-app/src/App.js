import './App.css';
import Home from "./pages/home/home.jsx"
import Signup from "./pages/register/register.jsx"
import Landing from "./pages/landing/landing.jsx"
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { Login } from "./pages/register/login.js";
import Register from "./pages/register/register.jsx"
import { UserProvider } from "./context/userContext";
import Navbar from './components/top/navbar.jsx';
import 'bulma/css/bulma.css';
import Leaderboard from "./pages/leaderboard/leaderboard.jsx";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const pages = ['about', 'contact', 'sitemap'];
const App = () => {

  // function App() {
  //   const [currForm, setCurrForm] = useState('login')
  //   const toggleForm = (formName) => {
  //     setCurrForm(formName)
  //   }

  return (
    <>
        <UserProvider>
        </UserProvider>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<></>} />
        </Routes>
    </>
  );
}

export default App;