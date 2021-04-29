import React from "react"
import './App.css';
import Header from "./Components/Header/Header"
import Welcome from "./Components/Welcome/Welcome"
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isEnglish: true
    }
    this.languageChanger = this.languageChanger.bind(this)
    this.toEnglish = this.toEnglish.bind(this)
    this.toJapanese = this.toJapanese.bind(this)

  }

  languageChanger() {
    this.setState(prevState => {
      return {
        isEnglish: !prevState.isEnglish
    }})
  }

  toEnglish() {
    this.setState({isEnglish: true})
  }

  toJapanese() {
    this.setState({isEnglish: false})
  }

  render() {
    return (
      <div className="container">
        <Header isEnglish={this.state.isEnglish} languageChanger={this.languageChanger}/>
        <Welcome isEnglish={this.state.isEnglish} />
        <About isEnglish={this.state.isEnglish} />
        <Projects isEnglish={this.state.isEnglish} />
        <Contact isEnglish={this.state.isEnglish} />
        <Footer isEnglish={this.state.isEnglish} toEnglish={this.toEnglish} toJapanese={this.toJapanese}/>
      </div>
    )
  }

}



export default App;
