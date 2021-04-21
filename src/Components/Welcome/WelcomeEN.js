import React from "react"
import "./Welcome.css"
import mugshot from "./homepage_mugshot.jpg"

function WelcomeEN() {
    return (
        <div className="welcome-area">
            <div className="welcome-text-area">
                <h1 className="heading">Welcome</h1>
                <img className="mugshot" src={mugshot} alt="profile"/>
                <p className="section-text">My name is Daniel, but you can call me Dan. I am a web designer, fluent Japanese speaker and musician.</p>
                <p className="section-text">This page is about me and about the projects I have created. Feel free to take a look around!</p>
                <button className="contact-button">GET IN TOUCH</button>
            </div>
        </div>
    )
}

export default WelcomeEN 