import React from "react";
import Navbar from "../Navbar";
import NavToggle from "../body/NavToggle";
import Greeting from "../body/Greeting";
import Profile from "../body/Profile";
import Achievement from "../body/Achievement";
import Skill from "../body/Skill";
import Project from "../body/Project";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="body container-fluid">
        <NavToggle />
        <Greeting />
        <Profile />
        <Achievement />
        <Skill />
        <Project />
      </div>
    </div>
  );
};

export default Layout;
