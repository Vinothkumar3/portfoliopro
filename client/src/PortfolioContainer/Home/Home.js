import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "./Home.css";

function Home() {
  return (
    /*main  home component navbars and responsive toggle */
    /* ALL COMPONENT IMAGE AND FONT STYLE REF PROTFOLIOPRO FOLDER ASSETS FOLDER INNER 
    HOME FILE REFER IMAGES, FONT FILE FONT FAMILY */
    <div className="home-container" id="home">
      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid">
          <button
            class="navbar-toggler navbar-light  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuItems"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end "
            id="menuItems"
          >
            <ul class="navbar-nav justify-content-end ">
              <li className="nav-item  ">
                {/* ever nav link href link refer related component */}
                <a className="nav-link" href="#home">
                  <i className="fa fa-home "></i>Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#aboutme">
                  <i className="fa fa-user"></i>AboutMe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">
                  <i className="fa fa-file-text"></i>Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">
                  <i className="fa fa-newspaper-o"></i>TechBlog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactme">
                  <i className="fa fa-address-card"></i>ContactMe
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* profile component import */}
      <Profile />
      {/* footer compont import */} <Footer />
    </div>
  );
}
export default Home;
