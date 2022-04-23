import React from "react";
import "./css/home.css";
import signature from "../signature.svg";
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiEternalLove } from "react-icons/gi";
import { AiOutlineStar } from "react-icons/ai";
import OurWork from "./OurWork";
import Review from "./Review";
import { Link } from "react-router-dom";
import Work from "./Work";
import Services from "./Services";
function Home() {
  return (
    <>
      <section id="home_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6 d-flex justify-content-center flex-column">
              <div className="nav__banner">
                <h4>Web Design and Develop</h4>
                <p>
                  We are a new design studio based in USA. We have over 20 years
                  of combined experience, and know a thing or two about
                  designing websites and mobile apps.
                </p>
                <button className="btn nav__banner__btn">
                  {" "}
                  <Link
                    to="/contact"
                    className="text-decoration-none text-white"
                  >
                    Contact Us
                  </Link>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about_us">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2>About Us</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores illo autem perspiciatis beatae laborum id veniam quam
                animi cum necessitatibus! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Natus eveniet sunt harum rerum,
                iure ducimus quibusdam cum eligendi quidem quis?
              </p>
              <img src={signature} alt="signature" className="signature" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="professional_skills"
        className="d-flex justify-content-center align-items-center align-content-center"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-4 professional__heading">
                professional skills
              </h2>

              <div className="professional__one mb-4">
                <h6>Ui/Ux Design 75%</h6>
                <div className="progress" style={{ height: "4px" }}>
                  <div
                    className="progress-bar progress-bar-info"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "420px", height: "4px" }}
                  ></div>
                </div>
              </div>

              <div className="professional__one mb-4">
                <h6>Web Development 90%</h6>
                <div className="progress" style={{ height: "4px" }}>
                  <div
                    className="progress-bar progress-bar-info"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "500px", height: "4px" }}
                  ></div>
                </div>
              </div>

              <div className="professional__one">
                <h6>Marketting 65%</h6>
                <div className="progress" style={{ height: "4px" }}>
                  <div
                    className="progress-bar progress-bar-info"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "340px", height: "4px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* projects  */}

      <section id="homeProjects">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-3 mb-5">
              <div className="homeProjects__one">
                <div className="homeProjects__one__child">
                  <FaBriefcase className="project_case" />
                </div>
                <div className="homeProjects__two__child">
                  <p>548</p>
                  <p>Projects Compleated</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="homeProjects__one">
                <div className="homeProjects__one__child">
                  <AiOutlineFieldTime className="project_case" />
                </div>
                <div className="homeProjects__two__child">
                  <p>548</p>
                  <p>Projects Compleated</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="homeProjects__one">
                <div className="homeProjects__one__child">
                  <AiOutlineStar className="project_case" />
                </div>
                <div className="homeProjects__two__child">
                  <p>548</p>
                  <p>Projects Compleated</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <div className="homeProjects__one">
                <div className="homeProjects__one__child">
                  <GiEternalLove className="project_case" />
                </div>
                <div className="homeProjects__two__child">
                  <p>548</p>
                  <p>Projects Compleated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product_gellery */}

      <Work />

      {/* our work  */}

      <OurWork />

      {/* what_we_provide  */}
      <Services />

      {/* reviews  */}
      <Review />

      {/* clent-logo  */}
      <section id="clientLogo">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-md-2 col-4 mx-auto">
              <img
                src="../../junior-project/client-1.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-2 col-4 mx-auto">
              <img
                src="../../junior-project/client-logo-2.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-2 col-4 mx-auto">
              <img
                src="../../junior-project/client-2.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-2 col-4 mx-auto">
              <img
                src="../../junior-project/client-3.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-2 col-4 mx-auto">
              <img
                src="../../junior-project/client-4.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* message  */}
      <section id="sendmessage">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="sendmessage_container text-center py-5">
                <h3>Need a Project</h3>
                <p>
                  Let us know what you are looking for in an agency. we will
                  take a look and see if this could be the start of something
                  beautiful.{" "}
                </p>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <input
                        type="text"
                        class="form-control"
                        id="usr"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group mb-4">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div class="form-group mb-4">
                    <input
                      type="text"
                      class="form-control"
                      id="usr"
                      placeholder="Your title"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                      placeholder="Your comment"
                    ></textarea>
                  </div>
                  <div className="message_btn mx-auto text-center">
                    <button type="button" className="btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
