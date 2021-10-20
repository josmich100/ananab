import React from "react";
import Hero from "../components/Hero";
import Links from "../components/Links";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import SplitScreens from "../components/SplitScreens";

function Terms() {
  return (
    <div>
      <NavBar
        background="bg-yellow-400"
        children={[
          <Links name="Home" dir="/" />,
          <Links name="About" dir="about" />,
          <Links name="Contact" dir="contact" />,
        ]}
      />
      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>

      <Section
        spacing="my-20"
        title="Terms and Conditions"
        description={[
          <p className="my-2">
            Ananab is a company developed to curb the technology gap in
            providing innovative ideas to suit public demands. It was
            established out of a desire to provide instant transport services by
            a click or touch to offer new opportunities to the desiring public
            to meet demand and control expectation hence making public transport
            reliable.
          </p>,
          <p className="my-2">
            Ananab is a company developed to curb the technology gap in
            providing innovative ideas to suit public demands. It was
            established out of a desire to provide instant transport services by
            a click or touch to offer new opportunities to the desiring public
            to meet demand and control expectation hence making public transport
            reliable.
          </p>,
          <p className="my-2">
            Ananab is a company developed to curb the technology gap in
            providing innovative ideas to suit public demands. It was
            established out of a desire to provide instant transport services by
            a click or touch to offer new opportunities to the desiring public
            to meet demand and control expectation hence making public transport
            reliable.
          </p>,
          <p className="my-2">
            Ananab is a company developed to curb the technology gap in
            providing innovative ideas to suit public demands. It was
            established out of a desire to provide instant transport services by
            a click or touch to offer new opportunities to the desiring public
            to meet demand and control expectation hence making public transport
            reliable.
          </p>,
        ]}
      />
    </div>
  );
}

export default Terms;
