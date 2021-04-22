import React from "react"
import "./Projects.css"
import ProjectBox from "./ProjectBox"
import calculator from "./calculator.jpeg"

function Projects() {

    const englishText = {
        sectionText: "Here is a collection of some of the projects I have made. Feel free to take a look..."
    }

    const projectTextEnglish1 = {
        projectBoxTitle: "Calculator Project",
        projectBoxImage: calculator,
        projectBoxImageAlt: "calculator",
        projectBoxInfo: "A simple calculator made using React. A basic design that can add, subtract, multiply and divide numbers.",
        projectBoxLink: "https://github.com/dpars34/calculator",
        projectBoxLinkText: "See the code on Github",
        projectBoxDate: "April 2021"
    }

    return (
        <div className="projects-area" id="projects-area">
            <div className="projects-text-area" >
                <h2 className="heading">Projects</h2>
                <p className="section-text">{englishText.sectionText}</p>
                <ProjectBox info={projectTextEnglish1} />
            </div>
        </div>
    )
}

export default Projects