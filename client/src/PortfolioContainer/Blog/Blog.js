import React from "react";
import Footer from "../Home/Footer/Footer";
import "./Blog.css";
function Blog() {
  return (
    /* some programing language blogs */
    <>
      <div className="blog-container" id="blog">
        <div className="blog-header">
          Blog
          <div className="blog-choose">programming blog</div>
          <div className="blog-underline">
            {/* carousel slides every card */}
            <div
              id="carouselExampleControls"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/* cards img and content */}{" "}
                  <div className="row " id="blogrow">
                    <div className="col-lg-4">
                      <div className="card" id="html-card">
                        <img
                          src=""
                          className="card-img-top"
                          id="html-img"
                          alt="..."
                        />
                        <div className="card-body" id="html-body">
                          <h5 className="card-title" id="html-title">
                            Html
                          </h5>
                          <p className="card-text" id="html-text">
                            The HyperText Markup Language or HTML is the
                            standard markup language for documents designed to
                            be displayed in a web browser. It can be assisted by
                            technologies such as Cascading Style Sheets and
                            scripting languages such as JavaScript.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card">
                        <img
                          src=""
                          className="card-img-top"
                          id="css-img"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">CSS</h5>
                          <p className="card-text">
                            CSS3 is used with HTML to create and format content
                            structure. It is responsible for colors, font
                            properties, text alignments, background images,
                            graphics, ...
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card">
                        <img
                          src=""
                          className="card-img-top"
                          id="js-img"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">JavaScript</h5>
                          <p className="card-text">
                            JavaScript abbreviated as JS, is a programming
                            language that is one of the core technologies of the
                            World Wide Web, alongside HTML and CSS. 98% of
                            websites use JavaScript on the client side for
                            webpage behavior, often incorporating third-party
                            libraries. All major web browsers have a dedicated
                            JavaScript engine to execute the code on users'
                            devices.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card">
                        <img
                          src=""
                          className="card-img-top"
                          id="react-img"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">React</h5>
                          <p className="card-text">
                            React makes it painless to create interactive UIs.
                            Design simple views for each state in your
                            application, and React will efficiently update and
                            render just the right components when your data
                            changes. Declarative views make your code more
                            predictable and easier to debug.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card">
                        <img
                          src=""
                          className="card-img-top"
                          id="boot-img"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Bootstrap</h5>
                          <p className="card-text">
                            Bootstrap is most popular CSS framework directed at
                            responsive, mobile-first front-end web development.
                            It contains HTML, CSS and JavaScript-based design
                            templates for typography, forms, buttons,
                            navigation, and other interface components.
                          </p>{" "}
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="card">
                        <img
                          src=""
                          className="card-img-top"
                          id="git-img"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">GIT&github</h5>
                          <p className="card-text">
                            Git is a distributed version control tool that can
                            manage a development project's source code history,
                            while GitHub is a cloud based platform built around
                            the Git tool.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span className="" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span className="" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
