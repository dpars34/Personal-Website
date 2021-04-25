import React from "react"
import "./Header.css"

function Header() {
    return(
        <header>
            <a className="personal-logo-link" href="top" >
                <p className="personal-logo">Daniel Parsons</p></a>
            <hr />
            <div className="nav-bar">
                <a href="#about-area" className="nav-link">About Me</a>
                <a href="#projects-area" className="nav-link">Projects</a>
                <a href="#contact-area" className="nav-link">Contact</a>
            </div>
        </header>
    )
}

export default Header