import React from "react";

const Achievement = () => {
  return (
    <div
      className="container justify-content-center content  p-3 rounded-lg bg-white"
      id="achievements"
      href="#achivements"
    >
      <div className="row m-2 my-3">
        <div className="col-12">
          <h3 className="font-weight-bold">ACHIEVEMENTS</h3>
          <div className="row mb-3">
            <div className="col-12 col-md-5 timeline">
              <h5 className="font-weight-bold">12/2018 - 05/2019</h5>
            </div>
            <div className="col-12 col-md-7 border-left">
              <h5 className="font-weight-bold">Leader of 19Team </h5>
              <p className="pl-2 text-muted">
                In Software Engineering subject at school
              </p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md-5 timeline">
              <h5 className="font-weight-bold">12/2018 - 05/2019</h5>
            </div>
            <div className="col-12 col-md-7 border-left">
              <h5 className="font-weight-bold">Member of Albert Team </h5>
              <p className="pl-2 text-muted" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12 col-md-5 timeline">
              <h5 className="font-weight-bold">06/2018 - 06/2019</h5>
            </div>
            <div className="col-12 col-md-7 border-left">
              <h5 className="font-weight-bold">Deputy Head of Content </h5>
              <p className="pl-2 text-muted">
                Public Speaking Club, University of Engineering and Technology
              </p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-5 timeline">
              <h5 className="font-weight-bold">06/2019 - Present</h5>
            </div>
            <div className="col-12 col-md-7 border-left">
              <h5 className="font-weight-bold">President</h5>
              <p className="pl-2 text-muted">
                Public Speaking Club, University of Engineering and Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
