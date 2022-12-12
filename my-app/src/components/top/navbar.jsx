import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import { Nav } from "react-router-dom";
import { redirect } from "react-router-dom";

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
import AppContext from "../../context/appContext";
import "./navbar.css"

export default function NavBar() {
    const { setIsAuth } = useContext(AppContext);
    const loggedIn = window.localStorage.getItem("isLoggedIn");
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    return (
        <div>
            <nav>
                <div className="links">
                    <Link to="/login" >
                        <div className="linkers" id="sign-in">Sign In
                        </div>
                    </Link>
                    <Link to="/register">
                        <div className="linkers" id="sign-in">Register</div>
                    </Link>
                </div>
            </nav>
        </div>

    )
}
