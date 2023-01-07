import React from "react";

import "./Portfolio.css";

import me from "../../assets/image.jpg";

const Portfolio = () => {
  const data = [
    {
      title: "title",
      image: me,
      github: "",
      demo: "",
    },
    {
      title: "title",
      image: "",
      github: "",
      demo: "",
    },
    {
      title: "title",
      image: "",
      github: "",
      demo: "",
    },
    {
      title: "title",
      image: "",
      github: "",
      demo: "",
    },
    {
      title: "title",
      image: "",
      github: "",
      demo: "",
    },
    {
      title: "title",
      image: "",
      github: "",
      demo: "",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ title, image, github, demo }, index) => {
          return (
            <article className="portfolio-item" key={index}>
              <div className="portfolio-item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
