import React from "react"
import './App.css';
import Header from "./Components/Header/Header"
import Welcome from "./Components/Welcome/Welcome"
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      IsEnglish: true
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </div>
    )
  }

}



export default App;
