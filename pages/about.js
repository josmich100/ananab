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
        background="bg-gray-800"
        children={[
          <Links name="Home" dir="/" />,
          <Links name="About" dir="about" active="text-yellow-300" />,
          <Links name="Contact" dir="contact" />,
        ]}
      />
      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>

      <Section
        spacing="mt-20 mb-5"
        // title="Building and Supporting Dreams"
        title="About Us"
        description="Ananab is a company developed to curb the technology gap in providing innovative ideas to suit public demands. It was established out of a desire to provide instant transport services by a click or touch to offer new opportunities to the desiring public to meet demand and control expectation hence making public transport reliable."
      />

      <SplitScreens
        children={[
          <img
            className="bg-gray-100 rounded-lg shadow-lg w-full md:w-3/5 m-5 md:m-3"
            src="taxi-driver.jpg"
          />,
          <div className="w-full md:w-2/5 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white overflow-hidden p-8 -mx-3 rounded-xl shadow-xl">
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
          <div className="w-full md:w-2/5 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white overflow-hidden p-8 -mx-3 rounded-xl shadow-xl">
              <h5 className="text-3xl text-gray-800 font-bold py-3">
                Earn By Renting Your Car
              </h5>
              <p className="text-lg text-gray-800 mb-5">
                Ananab is offering opportunities to individuals who wish to rent
                out their vehicles to our clients to earn money.
              </p>
            </div>
          </div>,
          <img
            className="bg-gray-100 rounded-lg shadow-lg w-full md:w-3/5 m-5 md:m-3"
            src="car-deal.jpg"
          />,
        ]}
      />
    </div>
  );
}

export default About;
