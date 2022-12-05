import React from "react";
import "./navbar.css"
export default function NavBar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h2 className="linkers" id="logo-text">Disposing Realm</h2>
                </div>
                <div className="links">
                    <div className="linkers" id="sign-in">Sign In</div>
                    <div className="linkers" id="sign-in">Register</div>
                </div>
            </nav>
        </div>

    )
}

