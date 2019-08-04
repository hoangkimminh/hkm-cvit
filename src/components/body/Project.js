import React from "react";

const Project = () => {
  return (
    <div
      className="container justify-content-center content p-3 rounded-lg bg-white"
      id="project"
      href="#project"
    >
      <div className="row m-2 my-3">
        <div className="col-12">
          <h3 className="font-weight-bold">PROJECTS</h3>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <a
                  data-toggle="collapse"
                  href="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Collapsible Group Item #1
                </a>
              </div>

              <div
                id="collapseOne"
                class="collapse collapsed"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
