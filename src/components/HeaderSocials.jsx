import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://twitter.com" target="_blank">
        <BsTwitter />
      </a>
      <a href="https://github.com/williamwebs" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
