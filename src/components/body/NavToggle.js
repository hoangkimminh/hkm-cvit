import React, { Component } from "react";

class NavbarToggle extends Component {
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
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              type="button"
              id="sidebarCollapse"
              className="navbar-btn"
              onClick={() => this.toggleSideBar()}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavbarToggle;
