import React from "react";
import Typical from "react-typical";
import "./Profile.css";
function Profile() {
  return (
    /* profile picture and home component texts and icons  buttons */
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          {/* icon links */}
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://accounts.google.com/ServiceLogin/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&ifkv=ARgdvAvfi2-fO8V3Ge4-u8V6wQARlT4dWpgdsWHDK9oJWBoOsW164Q1befCZKyfeHgOTmO_mCK3uIQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fa fa-envelope redgmail"></i>
              </a>
              <a
                href="https://github.com/Vinothkumar3"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fa fa-github blackgithub"></i>
              </a>
              <a
                href="https://linkedin.com/in/vinothkumarm3"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fa fa-linkedin bluelinkedin"></i>
              </a>
              <a
                href="https://web.whatsapp.com/"
                target={"_blank"}
                rel="noreferrer"
              >
                <i className="fa fa-whatsapp greenwhatsapp"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M<span className="highlighted-text"> Vinoth </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                {/* word loop effect 1 sec */}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 💃",
                    1000,
                    "Frontend-developer 💻",
                    1000,
                    "Reactjs dev 👨‍💻",
                    1000,
                    "UI dev 🎨",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline ">
                knack of building applications with front end and ui development
                operation...,
              </span>
            </span>
          </div>
          <div className="profile-options">
            {/* hire link ref contactme component */}{" "}
            <a href="#contactme" className="nav-links">
              <button className="btn">
                {" "}
                {""} Hire Me  &nbsp;<i className="fa fa-paper-plane"></i>{""}
              </button>
            </a>
            <a href="VinothResume.pdf" download="VinothResume.pdf">
              <button className="btn highlighted-btn"> Get Resume  &nbsp;<i className="fa fa-download"></i></button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
