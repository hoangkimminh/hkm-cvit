import React, { Component } from 'react'
import Navbar from './components/Navbar'
import NavToggle from './components/body/NavToggle'
import Greeting from './components/body/Greeting'
import Profile from './components/body/Profile'
import Achievement from './components/body/Achievement'
import Skill from './components/body/Skill'
import Project from './components/body/Project'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='body container-fluid'>
          <NavToggle />
          <Greeting />
          <Profile />
          <Achievement />
          <Skill />
          <Project />
        </div>
      </div>
    )
  }
}

export default App
