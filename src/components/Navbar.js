import React, { Component } from 'react'
import '../App.css'

class Navbar extends Component {
  render() {
    return (
      <nav id='sidebar' className='text-center'>
        <div className='sticky-top'>
          <div className='sidebar-header'>
            <h3 className='font-weight-bold'>HKM cvit</h3>
          </div>

          <ul className='list-unstyled components'>
            <li>
              <a href='#profile'>Profile</a>
            </li>
            <li>
              <a href='#achievements'>Achievements</a>
            </li>
            <li>
              <a href='#skill'>Skills</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
