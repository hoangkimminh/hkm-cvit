import React from "react";
import ProgressBar from "../progressbar/ProgressBar";
import CircleProgressBar from "../progressbar/CircleProgressBar";

const Skill = () => {
  return (
    <div
      className="container justify-content-center content p-3 rounded-lg bg-white"
      id="skill"
      href="#skill"
    >
      <div className="row m-2 my-3">
        <div className="col-12 col-md-5">
          <h3 className="font-weight-bold">SKILLS</h3>
          <div className="row d-flex justify-content-around text-center my-3">
            <div className="col-5">
              <CircleProgressBar content="Nodejs" percentage="35" />
            </div>
            <div className="col-5">
              <CircleProgressBar content="Database (SQL)" percentage="55" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 mt-3">
          <ProgressBar content="HTML5" percentage="75" />
          <ProgressBar content="CSS3" percentage="65" />
          <ProgressBar content="Javascript" percentage="60" />
          <ProgressBar content="Jquery" percentage="50" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
