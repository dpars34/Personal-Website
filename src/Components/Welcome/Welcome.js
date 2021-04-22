import React from "react"
import "./Welcome.css"
import mugshot from "./homepage_mugshot.jpg"

function Welcome(props) {

    const englishText = {
        sectionText1: "My name is Daniel, but you can call me Dan. I am a web designer, fluent Japanese speaker and musician.",
        sectionText2: "This page is about me and about the projects I have created. Feel free to take a look around!",
        buttonText: "GET IN TOUCH"
    }

    return (
        <div className="welcome-area">
            <div className="welcome-text-area">
                <h1 className="heading">Welcome</h1>
                <img className="mugshot" src={mugshot} alt="profile"/>
                <p className="section-text">{englishText.sectionText1}</p>
                <p className="section-text">{englishText.sectionText2}</p>
                <button className="contact-button">{englishText.buttonText}</button>
            </div>
        </div>
    )
}

export default Welcome 