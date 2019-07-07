import React, { Component } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';
import CircleProgressBar from './components/CircleProgressBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }
  toggleSideBar() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("sidebarCollapse").classList.toggle("active");
  }

  render() {
    return (
      <div className="App">
        {/*START sidebar */}
        <nav id="sidebar" className="text-center">
          <div className="sticky-top">
            <div className="sidebar-header">
              <h3 className="font-weight-bold">HKM cvit</h3>
            </div>

            <ul className="list-unstyled components">
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#achievements">Achievements</a>
              </li>
              <li>
                <a href="#skill">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>

          </div>
        </nav>
        {/*END sidebar */}

        {/*START body */}
        <div className="body container-fluid">
          {/*Nav toggle */}
          <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">

                <button type="button" id="sidebarCollapse" className="navbar-btn" onClick={() => this.toggleSideBar()}>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </nav>
          </div>
          {/* START greeting */}
          <div className="container content intro-stage text-center font-weight-bold d-flex align-items-center justify-content-center">
            <span className="text-white font-weight-bold col-10 col-md-8 m-2">
              Hi, I'm <br />
              HOÀNG KIM MINH
            </span>
          </div>
          {/* END greeting */}
        </div>
        {/*END body*/}
      </div>
    );
  }
}

export default App;