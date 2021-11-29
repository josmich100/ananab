import React, { useState } from "react";

import NavBar from "../components/NavBar";
import Links from "../components/Links";

const Register = () => {
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

      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden max-w-full">
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-yellow-400 py-10 px-10">
              <img width="100%" height="auto" src="hero.png" />
            </div>
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">Register</h1>

                <div className="flex flex-row my-12 mx-8 p-5 border border-1 rounded-xl shadow-lg">
                  <div className="flex-col w-1/3 mx-2">
                    <i className="mdi mdi-map-marker-outline text-gray-900 text-8xl"></i>
                  </div>
                  <div className="flex-col w-2/3 mx-2">
                    <p className="text-xl font-bold text-gray-900">
                      Ananab is now available in
                    </p>
                    <p className="text-lg">Kisii</p>
                    {/* <p className="text-lg">Nyamira</p> */}
                  </div>
                </div>

                <div className="p-4 rounded-xl shadow-xl">
                  <p className="text-xl font-bold text-gray-900">
                    To sign up now,
                  </p>

                  <button
                    type="button"
                    className="mx-auto lg:mx-0 gradient text-gray-900 text-xl font-bold rounded-full my-3 py-3 px-10 bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    <a href="driverapp">Download Ananab App</a>
                  </button>

                  <p className="text-gray-700 text-2xl my-3 p-4">
                    Read our{" "}
                    <a
                      href="/terms"
                      className="text-blue-500 underline font-bold hover:text-gray-800"
                    >
                      terms and conditions
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
