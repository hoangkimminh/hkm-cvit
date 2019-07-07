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
          {/* START profile */}
          <div className="container content justify-content-center p-3 rounded-lg bg-white" id="profile" href="#profile">
            <div className="row m-2">
              <div className="col-12 col-md-7 my-3">
                <h3 className="font-weight-bold">PROFILE</h3>
                <img src="images/avatar.JPG" className="ava-img img-fluid rounded-lg" alt="My avatar" />
              </div>
              <div className="col-12 col-md-5 my-4 border-left">
                <h6 className="pt-2 text-muted">WELCOME TO MY CV, I'M</h6>
                <h1 className="mb-3">Hoang Kim Minh</h1>
                <ul className="list text-muted" style={{ listStyle: "none", fontSize: "1rem" }}>
                  <li>
                    <span href=""><i className="fa fa-calendar mr-4" aria-hidden="true"></i>3th March, 1999</span>
                  </li>
                  <li>
                    <span href=""><i className="fa fa-phone mr-4" aria-hidden="true"></i>+84344955825</span>
                  </li>
                  <li>
                    <span href=""><i className="fa fa-home mr-4" aria-hidden="true"></i> Minh Hiep 1 village, Minh Khai commune, Hoai Duc district, Hanoi city</span>
                  </li>
                  <li>
                    <span href=""><i className="fa fa-university mr-4" aria-hidden="true"></i> Student at University of Engineering and Technology, Vietnam National University (VNU)</span>
                  </li>
                  <li>
                    <span href=""><i className="fa fa-smile-o mr-4" aria-hidden="true"></i> Sociable, hardworking, studious, enthusiastic</span>
                  </li>
                  <li>
                    <span href=""><i className="fa fa-star-half-o mr-4" aria-hidden="true"></i> Learning about technology, science, film, music, cooking,...</span>
                  </li>
                </ul>

              </div>
            </div>

          </div>
          {/* END profile */}
        </div>
        {/*END body*/}
      </div>
    );
  }
}

export default App;