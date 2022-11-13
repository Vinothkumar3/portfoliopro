import React from "react";
import "./Footer.css";

function Footer() {
  /* main footer protfolio project  */
  /* scroll top button  */let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
    <footer>
      <button
        type="button"
        onClick={backToTop}
        id="btn-back-to-top"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "none",
          color: "grey",
          height: "70px",
          width: "50px",
          marginBottom:"20px",
          backgroundColor: "orangered",
          borderRadius: "15px",
          fontSize: "40px",
        }}
      >{/* footer content */}
        <i class="fa fa-arrow-up"></i>
      </button>

      <div class="footer-copyright text-center py-3">
        © 2022 Copyright: website designed by <span id="name">Vinoth</span>
      </div>
  
    </footer>
   </>
  );
}

export default Footer;
