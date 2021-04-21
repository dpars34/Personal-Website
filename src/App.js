import React from "react"
import './App.css';
import Header from "./Components/Header/Header"
import WelcomeEN from "./Components/Welcome/WelcomeEN"
import AboutEN from "./Components/About/AboutEN"

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
        <WelcomeEN />
        <AboutEN />
      </div>
    )
  }

}



export default App;
