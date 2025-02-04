import React from "react";
import cv from "../../../public/william-anaza-resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={cv} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
