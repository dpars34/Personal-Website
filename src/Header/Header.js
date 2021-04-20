import React from "react"
import "./Header.css"

function Header() {
    return(
        <div className="nav-bar">
            <p className="personal-logo">Daniel Parsons</p>
            <a href="#" className="nav-link">About Me</a>
            <a href="#" className="nav-link">Projects</a>
            <a href="#" className="nav-link">Get In Touch</a>
        </div>
    )
}

export default Header