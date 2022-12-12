import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import { Nav } from "react-router-dom";
import { redirect } from "react-router-dom";



import AppContext from "../../context/appContext";
import "./navbar.css"

export default function NavBar() {
    // const { setIsAuth } = useContext(AppContext);
    // const loggedIn = window.localStorage.getItem("isLoggedIn");
    // const [anchorElNav, setAnchorElNav] = useState(null);
    // const [anchorElUser, setAnchorElUser] = useState(null);

    return (
        <>
        <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  {/* <figure class="image is-128x128">
  <img src={require('./dp.png')}>
</figure> */}
    <a class="navbar-item">
    <figure class="image is-10x10">
  <img src={require('./dp.png')}/>
</figure>
      {/* <img src={require('./dp.png')}  alt = "love" width="169" height="169"/> */}
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Profile
          </a>
          <a class="navbar-item">
            Leaderboard
          </a>
          <hr class="navbar-divider" />
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
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