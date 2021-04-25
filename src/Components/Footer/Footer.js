import React from "react"
import "./Footer.css"

function Footer() {

    const englishText = {
        siteMap: "Site Map",
        aboutMe: "About Me",
        projects: "Projects",
        contact: "Contact",
        connect: "Connect",
        gitHub: "GitHub",
        linkedIn: "LinkedIn",
        instagram: "Instagram",
        facebook: "Facebook"
    }

    return(
        <footer>
            <div className="footer-container">
                <a className="personal-logo-link" href="#welcome-area" >
                <p className="personal-logo-bottom">Daniel Parsons</p></a>
                <hr className="hr-bottom"/>

                <div className="footer-flex">
                    <div className="footer-block" id="first-col">
                        <p className="footer-heading">{englishText.siteMap}</p>
                        <a href="#about-area" className="footer-link">{englishText.aboutMe}</a>
                        <a href="#projects-area" className="footer-link">{englishText.projects}</a>
                        <a href="#contact-area" className="footer-link">{englishText.contact}</a>
                    </div> <br />

                    <div className="footer-block">
                        <p className="footer-heading">{englishText.connect}</p>
                        <a href="https://github.com/dpars34" className="footer-link">{englishText.gitHub}</a>
                        <a href="https://www.linkedin.com/in/daniel-parsons-b2491420a" className="footer-link">{englishText.linkedIn}</a>
                        <a href="https://www.instagram.com/dpars34/" className="footer-link">{englishText.instagram}</a>
                        <a href="https://www.facebook.com/daniel.parsons.372" className="footer-link">{englishText.facebook}</a>
                    </div>
                </div>

                <p className="copyright">© Daniel Parsons 2021</p>

            </div>
        </footer>
    )
}

export default Footer