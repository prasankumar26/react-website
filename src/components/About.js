import React from "react";
import "./css/about.css";
import { FaBriefcase } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GiEternalLove } from "react-icons/gi";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section id="about__banner">
        <div className="about__overlay">
          <div className="container">
            <div className="row banner_container text-center">
              <div className="col-md-8 mx-auto">
                <h2>AMELIA WOODS</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus sit porro quae rem id autem eos rerum laborum
                  accusamus consectetur nemo tempore tempora cum, nihil
                  obcaecati neque architecto repudiandae error.
                </p>
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

      {/* about_bg */}
      <section id="about_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="about_bg_container">
                <h2>About Me</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ipsa aut velit architecto, quae suscipit voluptatibus
                  repudiandae quidem explicabo temporibus enim, itaque corrupti
                  maiores sint fugiat aliquam laboriosam dicta! Est.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquam, vero quas hic optio minus officia cupiditate nam
                  repellendus commodi nostrum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* need_project  */}
      <section id="need_project">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 mx-auto">
              <h2 className="mb-3">Need a project?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                non quis qui soluta voluptatum officiis accusamus ullam rerum
                nobis repellendus.
              </p>
              <button className="btn about_btn">
                {" "}
                <Link to="/contact" className="text-decoration-none text-white">
                  Contact Us
                </Link>{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
