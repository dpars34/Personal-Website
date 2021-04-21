import React from "react"
import "./Header.css"

function Header() {
    return(
        <header>
            <p className="personal-logo">Daniel Parsons</p>
            <hr />
            <div className="nav-bar">
                <a href="#about-area" className="nav-link">About Me</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#contact" className="nav-link">Get In Touch</a>
            </div>
        </header>
    )
}

export default Header