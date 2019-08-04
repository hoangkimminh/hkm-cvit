import React from "react";

const Profile = () => {
  return (
    <div
      className="container content justify-content-center p-3 rounded-lg bg-white"
      id="profile"
      href="#profile"
    >
      <div className="row m-2">
        <div className="col-12 col-md-7 my-3">
          <h3 className="font-weight-bold">PROFILE</h3>
          <img
            src="images/avatar.JPG"
            className="ava-img img-fluid rounded-lg"
            alt="My avatar"
          />
        </div>
        <div className="col-12 col-md-5 my-4 border-left">
          <h6 className="pt-2 text-muted">WELCOME TO MY CV, I'M</h6>
          <h1 className="mb-3">Hoang Kim Minh</h1>
          <ul
            className="list text-muted"
            style={{ listStyle: "none", fontSize: "1rem" }}
          >
            <li>
              <span href="">
                <i className="fa fa-calendar mr-4" aria-hidden="true" />
                3th March, 1999
              </span>
            </li>
            <li>
              <span href="">
                <i className="fa fa-phone mr-4" aria-hidden="true" />
                +84344955825
              </span>
            </li>
            <li>
              <span href="">
                <i className="fa fa-home mr-4" aria-hidden="true" /> Minh Hiep 1
                village, Minh Khai commune, Hoai Duc district, Hanoi city
              </span>
            </li>
            <li>
              <span href="">
                <i className="fa fa-university mr-4" aria-hidden="true" />{" "}
                Student at University of Engineering and Technology, Vietnam
                National University (VNU)
              </span>
            </li>
            <li>
              <span href="">
                <i className="fa fa-smile-o mr-4" aria-hidden="true" />{" "}
                Sociable, hardworking, studious, enthusiastic
              </span>
            </li>
            <li>
              <span href="">
                <i className="fa fa-star-half-o mr-4" aria-hidden="true" />{" "}
                Learning about technology, science, film, music, cooking,...
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
