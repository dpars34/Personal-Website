import React from "react"
import "./Projects.css"

function ProjectBox(props) {
    return (
        <div className="project-box">
            <hr />
            <h3 className="project-box-title">{props.info.projectBoxTitle}</h3>
            
            <img src={props.info.projectBoxImage} alt={props.info.projectBoxImageAlt}className="project-box-image"/>
            <p className="project-box-info">{props.info.projectBoxInfo}</p>
            <a href={props.info.projectBoxLink} className="project-box-link">{props.info.projectBoxLinkText}</a>
            <p className="project-box-date">{props.info.projectBoxDate}</p>
        </div>
    )
}

export default ProjectBox