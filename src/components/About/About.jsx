import React from "react";
import "./About.css";

import me from "../../assets/image.jpg";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={me} alt="About Image" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>1+ Years Working </small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Internship</h5>
              <small>3 Internships</small>
            </article>
            <article className="about-card">
              <VscFolderActive className="about-icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quam
            maiores recusandae dolore dolorem natus quaerat quo atque
            praesentium aspernatur soluta, odit cumque. Quos aliquid pariatur
            vero earum reiciendis cupiditate!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
