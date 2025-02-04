import React from "react";

import "./Portfolio.css";

import edufort from "../../assets/edufort.png";
import intakes from "../../assets/intake1.png";
import quickaid from "../../assets/quickaid2.png";
import sunny from "../../assets/sunnyside.png";
import meal from "../../assets/meal.png";
import manage from "../../assets/manage.png";
import devlink from "../../assets/portfolio-devlinks.PNG";
import ukoro from "../../assets/portfolio-ukoros.PNG";
import crystal from "../../assets/portfolio-crystals.PNG";
import oxygen from "../../assets/portfolio-oxygens.PNG";

const Portfolio = () => {
  const data = [
    {
      title: "DevLinks",
      skills: "Next.js, TypeScript",
      image: devlink,
      github: "https://github.com/williamwebs/devlinks",
      demo: "https://devlinks-kohl.vercel.app/",
      details: `DevLinks is a Next.js web application providing a platform for developers and designers to showcase their 
projects, manage profiles and connect with industry professionals with just a single link. 
Technologies: Next.js, NextAuth, JavaScript, Tailwind CSS, Firebase, Google Analytics, dnd kit.`,
    },
    {
      title: "Crystal Genius Website",
      skills: "Next.js, TypeScript",
      image: crystal,
      github: "https://github.com/williamwebs/",
      demo: "https://crystalgeniusinternational.com/",
      details: `A portfolio website for a construction company.`,
    },
    {
      title: "Ukoro AI",
      skills:
        "Next.js, TypeScript, Gemini, Firebase, Jotai",
      image: ukoro,
      github: "https://github.com/williamwebs/ukoro-ai",
      demo: "https://ukoro-ai.vercel.app/",
      details: `Ukoro AI is an intelligent web application developed to assist users in analyzing video content and medical 
images. The application utilizes generative AI for detailed video transcriptions and allows users to interact with transcription data 
via an interface. It also provides AI-driven interpretation of medical X-rays and medical reports, helping to simplify complex 
information for users and professionals.`,
    },
    {
      title: "Oxygen Square Website",
      skills: "Next.js, TypeScript",
      image: oxygen,
      github: "https://github.com/williamwebs/Oxygen-Square",
      demo: "https://oxygen-square.vercel.app/",
      details: ``,
    },
    {
      title: "Intakes Ng",
      skills: "ReactJs, Firebase, API, Git, GitHub",
      image: intakes,
      github: "https://github.com/williamwebs",
      demo: "https://intakes-ng-e2763.web.app",
      details: `As the Frontend Lead on this product, I am tasked with setting up the structure for the project using ReactJs, built the user interfaces, consumed the APIs, conducted researches, led a team of 3 dev.interns in building this project. With this project, 
        I learn better how to work with Git & Github, firebase hosting and linking a custom domain, contributing to open-source and working with other developers & designers.
        This project also helped develop and improve on my communications, leadership and team-playing skills.`,
    },
    // {
    //   title: "QuickAid Ng",
    //   skills: "ReactJs, Tailwind, API, Git, GitHub",
    //   image: quickaid,
    //   github: "https://github.com/williamwebs",
    //   demo: "https://quickaid.com.ng",
    // },
    // {
    //   title: "Edu-Ford Website",
    //   skills: "HTML5, CSS3, JavaScript, GitHub",
    //   image: edufort,
    //   github:
    //     "https://github.com/williamwebs/Fully-Responsive-University-Website",
    //   demo: "https://edufort-university.netlify.app/",
    // },
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

    // {
    //   title: "Manage-X Landing Page",
    //   skills: "HTML, Tailwind, JavaScript, GitHub",
    //   image: manage,
    //   github:
    //     "https://github.com/williamwebs/Fully-Responsive-University-Website",
    //   demo: "https://manage-x.netlify.app/",
    //   details:
    //     "Manage-X is beautifully designed landing page was built using Tailwind CSS primarily in addition to HTML, CSS and JavaScript. On this project, I learnt how to work with Tailwind and design aesthetically pleasing pages according to Figma specification",
    // },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <a href="https://github.com/williamwebs" className="github__link">
        View more on GitHub
      </a>

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

      {/* wordpress */}
      <section className="wordpress-section">
        <h5>Some of the projects I handled using wordpress</h5>
        <h2>Wordpress works</h2>
        <div className="container">
          <div className="links">
            <a href="https://imperialedtech.com">Imperial edTech website</a>
            <a href="https://revrica.com">revrica website</a>
            <a href="https://rev.africa">rev website</a>
            <a href="https://shesolvesafrica.com">SheSolves Africa</a>
            <a href="https://big-nluxuryapartments.com">Big N Luxury</a>
            <a href="https://gcednigeria.org">GCED NIGERIA</a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
