import React from "react";
import Hero from "../components/Hero";
import Links from "../components/Links";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import SplitScreens from "../components/SplitScreens";

function About() {
  return (
    <div>
      <NavBar
        background="bg-yellow-400"
        children={[
          <Links name="Home" dir="/" />,
          <Links name="About" dir="about" active="underline" />,
          <Links name="Contact" dir="contact" />,
        ]}
      />
      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>

      <Section
        spacing="my-20"
        title="Building and Supporting Dreams"
        description="Ananab is a company developed to curb the technology gap in providing innovative ideas to suit public demands. It was established out of a desire to provide instant transport services by a click or touch to offer new opportunities to the desiring public to meet demand and control expectation hence making public transport reliable."
      />

      <SplitScreens
        children={[
          <img className="w-full md:w-3/5 z-1" src="hero.png" />,
          <div className="w-full md:w-2/5 p-6 flex flex-col flex-grow flex-shrink ">
            <div className="flex-1 bg-white overflow-hidden shadow-xl p-8 -mx-3">
              <h5 className="text-3xl text-gray-800 font-bold py-3">
                Earn As You Drive
              </h5>
              <p className="text-lg text-gray-800 mb-5">
                Ananab is partnering with individuals who desire to make a
                living by picking clients and dropping them at their desired
                points. Ananab will provide its clients (passengers) to our
                partners (drivers) at demand.
              </p>
            </div>
          </div>,
        ]}
      />

      <SplitScreens
        children={[
          <div className="w-full md:w-2/5 p-6 flex flex-col flex-grow flex-shrink ">
            <div className="flex-1 bg-white overflow-hidden shadow-xl p-8 -mx-3">
              <h5 className="text-3xl text-gray-800 font-bold py-3">
                Earn By Renting Your Car
              </h5>
              <p className="text-lg text-gray-800 mb-5">
                Ananab is offering opportunities to individuals who wish to rent
                out their vehicles to our clients to earn money.
              </p>
            </div>
          </div>,
          <img className="w-full md:w-3/5" src="hero.png" />,
        ]}
      />
    </div>
  );
}

export default About;
