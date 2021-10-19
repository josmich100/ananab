import React from "react";
import Hero from "../components/Hero";
import Links from "../components/Links";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import SplitScreens from "../components/SplitScreens";

function Contact() {
  return (
    <div>
      <NavBar
        background="bg-yellow-400"
        children={[
          <Links name="Home" dir="/" />,
          <Links name="About" dir="about" />,
        ]}
      />
      <Section spacing="my-12" title="Contact Us" />
      <SplitScreens
        background="bg-gradient-to-r from-yellow-500 to-yellow-200"
        children={[
          <img classNameName="w-full md:w-2/5 z-50" src="hero.png" />,
          <ServiceCard
            btnName="Talk to us"
            description="Good things happen when people can move, whether across town or toward their dreams. Opportunities appear, open up, become reality. What started as a way to tap a button to get a ride has led to billions of moments of human connection as people around the world go all kinds of places in all kinds of ways with the help of our technology."
          />,
          <ServiceCard
            btnName="Talk to us"
            description="Good things happen when people can move, whether across town or toward their dreams. Opportunities appear, open up, become reality. What started as a way to tap a button to get a ride has led to billions of moments of human connection as people around the world go all kinds of places in all kinds of ways with the help of our technology."
          />,
        ]}
      />
    </div>
  );
}

export default Contact;
