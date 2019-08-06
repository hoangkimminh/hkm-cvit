import React from "react";

import profile from "../../personal-info/profile";

const Profile = () => {
  return (
    <div
      className="container content justify-content-center p-3 rounded-border bg-white"
      id="profile"
      href="#profile"
    >
      <div className="row m-2">
        <div className="col-12 col-lg-7 my-3">
          <h3 className="font-weight-bold">PROFILE</h3>
          <img
            src="https://i.imgur.com/UakjyfT.jpg"
            className="img-thumbnail rounded-border"
            alt="My avatar"
            style={{borderWidth: 0}}
          />
        </div>
        <div className="col-12 col-lg-5 my-4 border-left">
          <h6 className="pt-2 text-muted">WELCOME TO MY CV, I'M</h6>
          <h1 className="mb-3">{profile.name}</h1>
          <ul
            className="list text-muted"
            style={{ listStyle: "none", fontSize: "1rem" }}
          >
            <li>
              <span href="">
                <i className="fa fa-calendar mr-4" aria-hidden="true" />
                {profile.DOB}
              </span>
            </li>
            <li>
              <span href="">
                <i className="fa fa-phone mr-4" aria-hidden="true" />
                {profile.phoneNumber}
              </span>
            </li>
            <li>
              <span href="">
                <i className="fa fa-home mr-4" aria-hidden="true" />{" "}
                {profile.address}
              </span>
            </li>
            <li>
              <span href="">
                <i className="fa fa-university mr-4" aria-hidden="true" />
                {profile.school}
              </span>
            </li>
            <li>
              <span href="">
                <i className="fa fa-smile-o mr-4" aria-hidden="true" />{" "}
                {profile.character}
              </span>
            </li>
            <li>
              <span href="">
                <i className="fa fa-star-half-o mr-4" aria-hidden="true" />
                {profile.hobbies}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;