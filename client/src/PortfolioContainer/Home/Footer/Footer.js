import React from "react";
import "./Footer.css";
function Footer() {
  return (
    /* this home component footer for image wave */
    <div className="footer-container ">
      <div className="footer-parent">
        <img
          src={require("../../../assets/Home/shape-bg.png")}
          alt="img wave"
        />
      </div>
    </div>
  );
}

export default Footer;
