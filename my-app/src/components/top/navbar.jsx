import React from "react";
import "./navbar.css"
export default function NavBar() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h2 className="linkers" id="marcy-logo">Disposing Realm</h2>
                </div>
                <div className="links">
                    <div className="linkers" id="sign-out">Sign Out</div>
                </div>
            </nav>
        </div>

    )
}

