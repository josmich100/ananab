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
          <Links name="Contact" dir="contact" />,
        ]}
      />
      <Section
        spacing="mt-20"
        title="We Are The Future"
        description="jikahfdkjhajkfhbjkgbdjskgajfdgbdjsabgjfdgjhf khljdjkahfjkfdashjkfdvhfjkhjkahjkdfhjksfdajkfdhajkfdhjka hhjsdgjsdgbhjgdjdfsgjhfdghjfdghjfdsghjfdghjfdfjdhhf djghdfjghjdf"
      />

      <SplitScreens
        children={[
          <img className="w-full md:w-2/5 z-50" src="hero.png" />,
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-xl">
              <div className="flex flex-col bg-white p-8">
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <h5 className="font-bold">Call or Text Us</h5>
                    <p className="text-lg mb-5">
                      <i class="mdi mdi-phone text-2xl"></i>
                      +254 *** *** ***
                    </p>
                    <h5 className="font-bold">Email Us</h5>
                    <p className="text-lg mb-5">
                      <i class="mdi mdi-email text-2xl"></i> ananab@mail.com
                    </p>
                    <h5 className="font-bold">Visit Us</h5>
                    <p className="text-lg mb-5">
                      <i class="mdi mdi-map text-2xl"></i> 254, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>,
        ]}
      />
    </div>
  );
}

export default About;
