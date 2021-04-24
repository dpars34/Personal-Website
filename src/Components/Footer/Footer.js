import React from "react"
import "./Footer.css"

function Footer() {
    return(
        <footer>
            <div className="footer-container">
                <a className="personal-logo-link" href="#welcome-area" >
                <p className="personal-logo-bottom">Daniel Parsons</p></a>
                <hr className="hr-bottom"/>

                <div className="footer-block">
                    <p className="footer-heading">Site Map</p>
                    <a href="#about-section" className="footer-link">About Me</a>
                    <a href="#projects-section" className="footer-link">Projects</a>
                    <a href="#contact-section" className="footer-link">Get In Touch</a>
                </div> <br />

                <div className="footer-block">
                    <p className="footer-heading">Contact</p>
                    <a href="" className="footer-link">GitHub</a>
                    <a href="" className="footer-link">LinkedIn</a>
                    <a href="" className="footer-link">Instagram</a>
                    <a href="" className="footer-link">Facebook</a>
                </div>

                <p className="copyright">© Daniel Parsons 2021</p>

            </div>
        </footer>
    )
}

export default Footer