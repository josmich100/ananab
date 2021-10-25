import React, { useState } from "react";
import Hero from "../components/Hero";
import Links from "../components/Links";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import SplitScreens from "../components/SplitScreens";

import Form from "../components/ContactForm";

function Contact() {
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    event.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      // mutateUser(
      //   await fetchJson("/api/login", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(body),
      //   })
      // );
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

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

      <Section spacing="my-12" title="Contact Us" />
      <SplitScreens
        // background="bg-gradient-to-r from-yellow-500 to-yellow-200"
        children={[
          <img className="w-full md:w-1/3 z-1" src="hero.png" />,
          <div className="w-full md:w-2/3 flex flex-col flex-grow flex-shrink ">
            <div className="flex-1 bg-white rounded overflow-hidden shadow-2xl">
              <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
            </div>
          </div>,
          <div className="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink ">
            <div className="flex-1 bg-white rounded overflow-hidden shadow-2xl">
              <div className="flex flex-col bg-white p-5">
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <h5 className="font-bold">Call or Text Us</h5>
                    <p className="text-lg mb-5">
                      <i className="mdi mdi-phone text-2xl"></i>
                      +254 *** *** ***
                    </p>
                    <h5 className="font-bold">Email Us</h5>
                    <p className="text-lg mb-5">
                      <i className="mdi mdi-email text-2xl"></i> ananab@mail.com
                    </p>
                    <h5 className="font-bold">Visit Us</h5>
                    <p className="text-lg mb-5">
                      <i className="mdi mdi-map text-2xl"></i> 254, Kenya
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

export default Contact;
