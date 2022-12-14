import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-router-dom";
import { redirect } from "react-router-dom";
import AppContext from "../../context/appContext";
import "./navbar.css";
import Leaderboard from "../../pages/leaderboard/leaderboard";

export default function NavBar() {
  // const { setIsAuth } = useContext(AppContext);
  // const loggedIn = window.localStorage.getItem("isLoggedIn");
  // const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);
  const USER = JSON.parse(window.localStorage.getItem("user")) || '';
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/landing">
            <div id="logo">Disposing Realm</div>
          </Link>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              {USER.user_id ? (
                <div className="buttons">
                  <Link to="/landing">
                    <div onClick={(() => {
                      window.localStorage.removeItem('user')
                      window.location.reload()
                      })} className="button is-primary">
                      <strong>Log out</strong>
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="buttons">
                  <Link to="/register">
                    <div className="button is-primary">
                      <strong>Register</strong>
                    </div>
                  </Link>
                  <Link to="/login">
                    <div className="button is-light">Log in</div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* <Background>
      </Background> */}
    </>
  );
}

//   <nav>
//             <div className="links">
//                 <Link to="/login" >
//                     <div className="linkers" id="sign-in">Sign In
//                     </div>
//                 </Link>
//                 <Link to="/register">
//                     <div className="linkers" id="sign-in">Register</div>
//                 </Link>
//             </div>
//         </nav>

// const NavBar = () => {
//     const { user, setUser } = useContext(UserContext);

//     const [loggedOut, setLoggedOut] = useState(false);

//     useEffect(() => {
//         if (loggedOut) {
//             fetch("/logout")
//                 .then(() => setUser(null))
//                 .then(() => setLoggedOut(true));
//         }
//     }, [loggedOut]);

//     return (
//         <div>
//             <nav>
//                 <div className="links">
//                     <Link to="http://localhost:3001/login">
//                         <div className="linkers" id="sign-in">
//                             Sign In
//                         </div>
//                     </Link>
//                     <div className="linkers" id="sign-in">
//                         Register
//                     </div>
//                 </div>

//                 <Nav.Link onClick={() => setLoggedOut(true)}>Logout</Nav.Link>
//                 {loggedOut && <redirect to="/" />}
//             </nav>
//         </div>
//     );
// };

// export default NavBar;

// import { React, useState, useContext } from "react";
// import { useNavigate, NavLink, Link } from "react-router-dom";
// import { Login } from "../../../../../Back-End/controller/userController";
