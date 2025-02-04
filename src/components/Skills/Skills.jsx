import React from "react";
import "./Skills.css";

import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container skills-container">
        {/* frontend */}
        <div className="skills-frontend">
          <h3>Frontend Development</h3>
          <div className="skills-content">
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>React.js</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>Next.js</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>TypeScript</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>Redux Toolkit</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>Jotai</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>Tailwindcss</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>MongoDb</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>Firebase Tools</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>Git</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            {/* <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>Netlify</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}
          </div>
        </div>
        {/* web design */}
        <div className="skills-wordpress">
          <h3>CMS</h3>
          <div className="skills-content">
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>WordPress</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>Elementor</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
            <article className="skills-details">
              <BsPatchCheckFill className="skills-icon" />
              <div>
                <h4>Woo-Commerce</h4>
                {/* <small className="text-light">Intermediate</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
