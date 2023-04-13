import React from "react";

import "./Portfolio.css";

import edufort from "../../assets/edufort.png";
import intakes from "../../assets/intake1.png";
import quickaid from "../../assets/quickaid2.png";
import sunny from "../../assets/sunnyside.png";
import meal from "../../assets/meal.png";
import manage from "../../assets/manage.png";

const Portfolio = () => {
  const data = [
    {
      title: "Intakes Ng",
      skills: "ReactJs, Firebase, API, Git, GitHub",
      image: intakes,
      github: "https://github.com/williamwebs",
      demo: "https://intakes.ng",
      details: `As the Frontend Lead on this product, I am tasked with setting up the structure for the project using ReactJs, built the user interfaces, consumed the APIs, conducted researches, led a team of 3 dev.interns in building this project. With this project, 
        I learn better how to work with Git & Github, firebase hosting and linking a custom domain, contributing to open-source and working with other developers & designers.
        This project also helped develop and improve on my communications, leadership and team-playing skills.`,
    },
    {
      title: "QuickAid Ng",
      skills: "ReactJs, Tailwind, API, Git, GitHub",
      image: quickaid,
      github: "https://github.com/williamwebs",
      demo: "https://quickaid.com.ng",
    },
    {
      title: "Edu-Ford Website",
      skills: "HTML5, CSS3, JavaScript, GitHub",
      image: edufort,
      github:
        "https://github.com/williamwebs/Fully-Responsive-University-Website",
      demo: "https://edufort-university.netlify.app/",
    },
    {
      title: "Find Meal API search",
      skills: "ReactJs, Netlify, API, GitHub",
      image: meal,
      github:
        "https://github.com/williamwebs/Fully-Responsive-University-Website",
      demo: "https://foodrecipe-search.netlify.app/",
      details: `Find Meal is a JavaScript project that provides different food reciepes based on an ingredient search.
        It fetches data from an API and renders the result. The project was built with HTML, CSS, JavaScript and fetches data from the mealdbapi.
        `,
    },
    {
      title: "SunnySide Landing Page",
      skills: "HTML, CSS, JavaScript, GitHub",
      image: sunny,
      github: "https://github.com/williamwebs/sunny-side-website",
      demo: "https://sunnyside-submission.netlify.app/",
      details:
        "SunnySide Project is a Frontend Mentor challenge submission built with JavaScript",
    },

    {
      title: "Manage-X Landing Page",
      skills: "HTML, Tailwind, JavaScript, GitHub",
      image: manage,
      github:
        "https://github.com/williamwebs/Fully-Responsive-University-Website",
      demo: "https://manage-x.netlify.app/",
      details:
        "Manage-X is beautifully designed landing page was built using Tailwind CSS primarily in addition to HTML, CSS and JavaScript. On this project, I learnt how to work with Tailwind and design aesthetically pleasing pages according to Figma specification",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <a href="https://github.com/williamwebs" className="github__link">View more on GitHub</a>

      <div className="container portfolio-container">
        {data.map(({ title, image, github, demo, details, skills }, index) => {
          return (
            <article className="portfolio-item" key={index}>
              <div className="portfolio-item-image">
                <img src={image} alt="" />
                <aside className="detail">
                  <p>{details}</p>
                </aside>
              </div>
              <h3>{title}</h3>
              <p>{skills}</p>
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
