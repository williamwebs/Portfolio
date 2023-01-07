import React from "react";
import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Portfolio,
  Skills,
  Testimonial,
} from "./components";

const App = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
