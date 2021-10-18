import React from "react";
import Hero from "../components/Hero";
import Links from "../components/Links";
import NavBar from "../components/NavBar";
import Section from "../components/Section";

function About() {
  return (
    <div>
      <NavBar
        background="bg-yellow-400"
        children={[
          <Links name="Home" dir="/" />,
          <Links name="Contact" dir="contact" />,
        ]}
      />
      <Section
        spacing="mt-20"
        title="we are egdauidhaishhsdu"
        description="jikahfdkjhajkfhbjkgbdjskgajfdgbdjsabgjfdgjhf khljdjkahfjkfdashjkfdvhfjkhjkahjkdfhjksfdajkfdhajkfdhjka hhjsdgjsdgbhjgdjdfsgjhfdghjfdghjfdsghjfdghjfdfjdhhf djghdfjghjdf"
      />

      {/* <Hero /> */}
    </div>
  );
}

export default About;
