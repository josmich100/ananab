import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

function About() {
  return (
    <div>
      <NavBar
        children={[
          <Links name="Home" dir="/" />,
          <Links name="About" dir="about" />,
          <Links name="Contact" dir="contact" />,
        ]}
      />
      <Hero />
    </div>
  );
}

export default About;
