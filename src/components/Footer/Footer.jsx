import React from "react";

import "./Footer.css";

import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* <a href="#" className="footer-logo">
        Logo
      </a> */}
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Recommendations</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      {/* footer social links */}
      <div className="footer-socials">
        <a href="https://linkedin.com/">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/">
          <BsTwitter />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+2349124295757">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/">
          <FaGithub />
        </a>
      </div>

      {/* copyright */}
      <div className="footer-copyright">
        <small>&copy; th_ejouRney.xyz. All rights reserved.</small>
      </div>
      {/* <a href="#" className="scroll-up">
        scroll up
      </a> */}
    </footer>
  );
};

export default Footer;
