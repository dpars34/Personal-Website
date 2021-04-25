import React from "react"
import "./Projects.css"
import ProjectBox from "./ProjectBox"
import calculator from "./calculator.png"
import survey from "./survey.png"

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

    const projectTextEnglish2 = {
        projectBoxTitle: "Survey Form",
        projectBoxImage: survey,
        projectBoxImageAlt: "survey form",
        projectBoxInfo: "A form to gather data about different user's language learning goals.",
        projectBoxLink: "https://codepen.io/daniel-parsons-the-vuer/pen/ZEBRgjE",
        projectBoxLinkText: "See the code on CodePen",
        projectBoxDate: "March 2021"
    }

    return (
        <div className="projects-area" id="projects-area">
            <div className="projects-text-area" >
                <h2 className="heading">Projects</h2>
                {/*<p className="section-text">{englishText.sectionText}</p>*/}
                <div className="flex-container-project">
                    <ProjectBox info={projectTextEnglish1} />
                    {/*<div className="vertical-line"></div>*/}
                    <ProjectBox info={projectTextEnglish2} />
                </div>
            </div>
        </div>
    )
}

export default Projects