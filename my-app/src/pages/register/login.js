import { React, useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
// import "./login.css";
import AppContext from "../../context/appContext";

export default function Login({ setAuth }) {
  const { setUser } = useContext(AppContext)


  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };

    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const data = await res.json();
    if (data.token) {
      window.localStorage.setItem("token", data.token);
      setAuth(true);
      setUser(data.user)
    } else {
      setAuth(false);
    }
    if (data.rows && data.rows.length > 1) {
      navigate("/", { replace: true });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="page">
      

      <div className="left-side">
      </div>

      <div className="right-side">
        <span className="logo"> Log in </span>
        <div>
        <span className="tagline"> - </span>
        </div>
        <div className="pageSwitcherL">
              <NavLink
                to="/login"
                activeClassName="pageSwitcherItem-activeL"
                className="pageSwitcherItemL"
              >
                Sign In
              </NavLink>

              <br/>

              <NavLink
                exact
                to="/signup"
                activeClassName="pageSwitcherItem-activeL"
                className="pageSwitcherItemL"
              >
                Sign Up
              </NavLink>
         </div>
              <div className="form-outline">
                <input
                  type="email"
                  id="form3Example1w"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  className="formLabel"
                  htmlFor="form3Example1w "
                >
                  Email
                </label>
              </div>

            <div className="form-outline">
              <input
                type="password"
                id="form3Example1w"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                className="formLabel"
                htmlFor="form3Example1w"
              >
                Password
              </label>
            </div>

            <div className="form-outline">
                <button
                  type="submit"
                  className="button"
                  onClick={handleLogin}
                >
                  Submit
                </button>
            </div>
  
      </div>

    </div>

);
}

// import { useRef, useState, useEffect, useContext } from "react";
// import AppContext from "../../context/appContext"
//import axios from '../../api/axios'

// const Login_Url = '/auth'

// const Login = () => {
//     const {setAuth} = useContext(AppContext)
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd]);

//   const handleSubmit = async (e)=> {
//     e.prevent.Default()
    // try {
    //     const response = await axios.post(Login_Url, JSON.stringify({user, pwd}),
    //     {
    //         headers: { 'Content-Type': 'application/json'},
    //         withCredentials: true
    //     })
    //     setUser('')
    //     setPwd('')
    //     setSuccess(true)
    // } catch(err){

    // }
   
    
//   }

//   return (
//     <>
//     {success ? (<section>
//         <h1> You are logged in!</h1>
//         <br/>
//         <p>
//             <a herf = '#'>Go to Home</a>
//         </p>
//     </section>
//     ) : (
//     <section>
//       <p
//         ref={errRef}
//         classname={errMsg ? "errMsg" : "offscreen"}
//         aria-live="assertive"
//       >
//         {errMsg}
//       </p>
//       <h1> Sign In </h1>
//       <form onSubmit = {handleSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           ref={userRef}
//           autoComplete="off"
//           onChange={(e) => setUser(e.target.value)}
//           value={user}
//           required
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           onChange={(e) => setPwd(e.target.value)}
//           value={pwd}
//           required
//         />
//         <button>Sign In</button>
//       </form>
//       <p>
//         Need an Account? <br/>
//         <span classname = 'line'>
//             { /*router*/}
//             <a href= "#" >Sign Up</a>
//         </span>
//       </p>
//     </section>
//     )};
//     </>
//   );
// };
