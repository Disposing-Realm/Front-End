import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import { Nav } from "react-router-dom";
import { redirect } from "react-router-dom";
import AppContext from "../../context/appContext";
import "./navbar.css"
import Leaderboard from "../../pages/leaderboard/leaderboard";

export default function NavBar() {
  // const { setIsAuth } = useContext(AppContext);
  // const loggedIn = window.localStorage.getItem("isLoggedIn");
  // const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  return (
    <>

      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a>

            <Link to="/landing">
              <img src={require('./drText.png')} />
            </Link>
          </a>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>


        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Profile
                </a>
                <Link to="/leaderboard">
                <a class="navbar-item">
                  Leaderboard
                </a>
                </Link>
                <hr className="navbar-divider" />
              </div>
            </div>
          </div>


          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
              <Link to="/register">
                <a class="button is-primary">
                  <strong>Register</strong>
                </a>
                </Link>
                <Link to="/login">
                <a class="button is-light">
                  Log in
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <Background>
      </Background> */}
    </>
  )
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