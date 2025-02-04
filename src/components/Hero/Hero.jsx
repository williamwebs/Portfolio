import React from "react";
import "./Hero.css";

import { CTA, HeaderSocials } from "../../components";

import me from "../../assets/image.jpg";

const Hero = () => {
  return (
    <header>
      <section className="container header-container">
        <h5>Hello I'm</h5>
        <h1>William Anaza</h1>
        <h5 className="text-light">Frontend Engineer</h5>
        <marquee>
          Frontend Engineer: React.js, Next.js, TypeScript, JavaScript, Redux
          Toolkit, Jotai, Zustand.
        </marquee>
        <CTA />
        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
        <HeaderSocials />

        {/* bubbles */}
        <div className="bubble"></div>
        <div className="bubble bubble__2"></div>
        <div className="bubble bubble__6"></div>
      </section>
    </header>
  );
};

export default Hero;
