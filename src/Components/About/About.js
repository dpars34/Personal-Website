import React from "react"
import "./About.css"

function AboutEN() {

    const englishText = {
        sectionText1: "As far back as I can remember, I have had the unwavering desire to create. From the age of seven I was writing my own songs on the guitar, and by fifteen I was writing my first piano pieces. It was this desire to create that eventually led me to music college where I graduated with a degree in music composition.",
        sectionText2: "After graduating, I decided that I needed a change, so I packed my bags and moved to Japan to teach English. It was in Japan that I was first introduced to the world of programming, when one of my friends showed me a language learning tool that she was working on. I was instantly captivated, amazed by the endless possibilities that programming and web design were able to offer. Since then I have been working on various different projects with a focus on Javascript, React and HTML/CSS.",
        sectionText3: "My arts background has given me a unique perspective on programming and web design. No matter whether it is a musical composition or a web page, all creative endeavours should be beautiful, balanced and unique.",
        sectionText4: "I currently live in Osaka, Japan. I am a fluent Japanese speaker having achieved the JLPT N1 grade. Scroll down to see some of the projects I have been working on."
    }
    return (
        <div className="about-area" id="about-area">
            <div className="about-text-area" >
                <h2 className="heading">About Me</h2>
                <p className="section-text">{englishText.sectionText1}</p>
                <p className="section-text">{englishText.sectionText2}</p>
                {/*<p className="section-text">{englishText.sectionText3}</p>*/}
                <p className="section-text">{englishText.sectionText4}</p>
            </div>
        </div>
    )
}

export default AboutEN