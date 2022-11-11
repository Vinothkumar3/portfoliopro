import React from "react";
import "./AboutMe.css";
function AboutMe() {
  return (
    /* aboutme component */
    <>
      {/* this abotcontainer this way to use every contain made like resume,contact,blog*/}
      <div className="aboutme-container" id="aboutme">
        {/* abotheader and underline text chose text and under comomon for about and contact,blog,resume componenent i used */}
        <div className="aboutme-header">
          AboutMe
          <div className="choose">why choose me?</div>
          <div className="underline">
            <div className="abou-cont">
              Front-end web and mobile developer along with a knack of building
              applications with utmost efficiency. Adaptable with the work
              environment and team members. Passionate to learn new things and
              flexible to changes.
            </div>
            <div className="few">
              <h1>Here are a few Highlights:</h1>
              <p>
                <ul>
                  <li>
                    <span>Frontend web and mobile development</span>
                  </li>
                  <li>
                    <span>interactive Frontend as per the design</span>
                  </li>
                  <li>
                    <span> react </span>
                  </li>
                  <li>
                    <span> creating design</span>
                  </li>
                  <li>
                    <span>using framework and library </span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutMe;
