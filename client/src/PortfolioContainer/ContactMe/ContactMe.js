import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* contame component divide get in touch and contact me  */
function ContactMe() {
  /* send mail emailjs and toast msg */
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zalcudq",
        "template_j8li8h5",
        form.current,
        "iGs5tg5V0Yz7wLE7k"
      )
      .then(
        (result) => {
          toast.success(
            "Thank you for your mail !",
            {
              position: toast.POSITION.TOP_RIGHT,
              className: "success message .. 🚩 👍",
            },
            result.text
          );
        },
        (error) => {
          /*  toast("An error occurred, Please try again sorry", error.text); */
          toast.error(
            "error Something Wrong..! 😲 😭",
            {
              position: toast.POSITION.TOP_RIGHT,
              className: "error_message",
            },
            error.text
          );
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact-container" id="contactme">
        <div className="contact-header">
          ContactMe
          <div className="contact-choose">Lets keep in touch</div>
          <div className="contact-underline">
            <div className="row ">
              {/* col-7 get in touch adress phone,location texts and icon */}
              <div className="col-lg-7" /* style={{ border: "1px solid" }} */>
                <>
                  {" "}
                  <h3>Get In Touch</h3>
                  <div className="touchname" id="touchname">
                    <p className="touchp">
                      {" "}
                      <i  id="ema"className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;
                      Email:
                    </p>
                    <p class="p1ma">
                      &emsp;&emsp;&nbsp;gmvinothkumar1998@gmail.com
                    </p>
                  </div>
                  <p className="touchp">
                    {" "}
                    <i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp; Mobile:
                  </p>
                  <p class="p1m">&emsp;&emsp;&nbsp;8220311236</p>
                  <p className="touchp">
                    {" "}
                    <i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp;
                    Address:
                  </p>
                  <p class="p1">
                    &emsp;&emsp;&nbsp;ranipet dist(632404),tamilnadu.
                  </p>
                  <p className="p1m">
                    {" "}
                    <br />
                    {/* home component icons links */}
                    <div className="colz-icon">
                      &emsp;&emsp;&emsp;
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
                  </p>
                </>
              </div>
              {/* col-5 contact me input box with icon send click email */}
              <div className="col-lg-5" /* style={{ border: "1px solid" }} */>
                <div className="container">
                  {/* form onsubmit */}
                  <form ref={form} onSubmit={sendEmail} target="_blank">
                    <h3>Contact Me</h3>
                    <div id="emailhere">send your email here!</div>
                    <label for="uname" class="label">
                      Name:
                    </label>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-grey">
                            <i className="fa fa-user"></i>&nbsp;
                          </span>
                        </div>
                        <input
                          name="user_name"
                          type="name"
                          placeholder="name"
                          className="form-control border-left-0"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label for="uname" class="label">
                        Email:
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text ">
                            <i
                              className="fa fa-envelope"
                              style={{ width: "16px" }}
                            ></i>
                            &nbsp;
                          </span>
                        </div>
                        <input
                          name="user_email"
                          type="email"
                          placeholder="Email@gmail.com"
                          className="form-control border-left-0"
                          required
                          pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                        />
                      </div>
                    </div>

                    <label for="uname" class="label">
                      phone:{" "}
                      <span className="phone" style={{ fontSize: "12px" }}>
                        (optional)
                      </span>
                    </label>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-grey">
                            <i className="fa fa-phone"></i>&nbsp;
                          </span>
                        </div>
                        <input
                          name="phone"
                          type="name"
                          placeholder="9876543210"
                          className="form-control border-left-0"
                          title="enter ten digit number"
                          maxlength="10"
                          pattern="[0-9]{10}"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label for="uname" class="label">
                        message:
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        rows="2"
                        placeholder="Enter message"
                        required
                      ></textarea>
                    </div>
                    {/* submit click form send email  */}
                    <button
                      type="submit"
                      className="btn btn-success float-right"
                    >
                      <i className="fa fa-paper-plane"></i>
                      Send
                    </button>
                    <ToastContainer />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
