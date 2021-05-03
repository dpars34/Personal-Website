import React from "react"
import "./Header.css"

function Header(props) {

    const englishText = "English"
    const japaneseText= "日本語"

    return(
        <header>
            <a className="personal-logo-link" href="#welcome-area" >
                <p className="personal-logo">Daniel Parsons</p></a>
            <hr className="header-rule"/>
            <div className="nav-bar">
                <a href="#about-area" className="nav-link">About Me</a>
                <a href="#projects-area" className="nav-link">Projects</a>
                <a href="#contact-area" className="nav-link">Contact</a>
            </div>
            <div className="button-container"></div>
            <button onClick={props.languageChanger} className="lang-button">{props.isEnglish ? japaneseText : englishText}</button>
        </header>
    )
}

export default Header