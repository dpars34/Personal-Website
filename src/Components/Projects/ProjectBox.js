import React from "react"
import "./Projects.css"

function ProjectBox(props) {

    function clickHandler() {
        window.location.assign(props.info.projectBoxLink)
    }

    return (
        <div className="project-box" onClick={clickHandler}>
            <hr className="project-rule"/>
            <h3 className="project-box-title" lang={props.isEnglish ? "en" : "ja"}>{props.info.projectBoxTitle}</h3>
            
            <img src={props.info.projectBoxImage} alt={props.info.projectBoxImageAlt}className="project-box-image"/>
            <p className="project-box-info" lang={props.isEnglish ? "en" : "ja"}>{props.info.projectBoxInfo}</p>
            <a href={props.info.projectBoxLink} className="project-box-link" lang={props.isEnglish ? "en" : "ja"}>{props.info.projectBoxLinkText}</a>
            <p className="project-box-date" lang={props.isEnglish ? "en" : "ja"}>{props.info.projectBoxDate}</p>
        </div>
    )
}

export default ProjectBox