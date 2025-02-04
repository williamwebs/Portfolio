import React from "react";
import "./About.css";

import me from "../../assets/image.jpg";

import { FaAward, FaBook } from "react-icons/fa";
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
              {/* <small>1+ Years </small> */}
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Contributions</h5> {/** from Internship **/}
              <small>120+</small>
            </article>
            <article className="about-card">
              <FaBook className="about-icon" />
              {/* <VscFolderActive className="about-icon" /> */}
              <h5>Article</h5> {/** from Project **/}
              <small>2</small>
            </article>
          </div>
          <p>
            Hello! 👋 <br /> I'm William Anaza, a Frontend Developer with
            experience building performant web applications with{" "}
            <span>React.js / Next.js & TypeScript</span> primarily. I pride
            myself in builing pixel-perfect, aesthetically appealing and
            mobile-responsive frontend solutions either as an independent
            developer or collaboratively with a team.
          </p>
          <p>
            In addition to <span>React.js / Next.js & Typescript</span>, I am
            also proficient in
            <span>
              {" "}
              JavaScript, Tailwindcss, Shadcn, Jotai & Redux Toolkit for State
              Management, Firebase tools, MongoDB, Git for version control and
              other modern frontend tools.
            </span>{" "}
            I also have a good understanding of WordPress and have built a
            number of websites with it. I am a big fan of AI and its application
            in builing innovative solutions.
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
