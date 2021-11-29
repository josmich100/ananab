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
        background="bg-gray-800"
        children={[
          <Links name="Home" dir="/" />,
          <Links name="About" dir="about" />,
          <Links name="Contact" dir="contact" active="text-yellow-300" />,
        ]}
      />
      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>

      <Section spacing="mt-20 mb-5" title="Contact Us" />

      <SplitScreens
        // background="bg-gradient-to-r from-yellow-500 to-yellow-200"
        children={[
          <img
            className="w-full md:w-1/2 bg-gray-100 rounded-lg shadow-lg m-3 z-1"
            src="phone.jpg"
          />,
          <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 text-center bg-white rounded overflow-hidden p-5 rounded-xl shadow-2xl">
              <h5 className="text-gray-900 text-3xl font-bold underline p-3">
                Contact Details
              </h5>
              <div className="flex flex-col bg-white p-5">
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <h5 className="text-gray-900 text-2xl font-bold">
                      <i className="mdi mdi-phone"></i> Call/Text
                    </h5>
                    <p className="text-gray-700 text-xl mb-4">
                      <a href="tel:+254717101257">+254 7-- --- ---</a>
                    </p>
                    <h5 className="text-gray-900 text-2xl font-bold">
                      <i className="mdi mdi-email"></i> Email
                    </h5>
                    <p className="text-blue-500 text-xl mb-4">
                      <a href="mailto:+254717101257">ananabcabs@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>,
        ]}
      />

      <SplitScreens
        // background="bg-gradient-to-r from-yellow-500 to-yellow-200"
        children={[
          <div className="w-full md:w-2/3 bg-white rounded overflow-hidden p-4 rounded-xl shadow-2xl">
            <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
          </div>,
        ]}
      />
    </div>
  );
}

export default Contact;
