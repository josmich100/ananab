import React, { useState } from "react";

import Form from "../components/RegisterForm3";

import NavBar from "../components/NavBar";
import Links from "../components/Links";

const Register2 = () => {
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
                <h1 className="font-bold text-3xl text-gray-900">
                  Legal Information
                </h1>
                <p>Enter your information to register</p>
              </div>
              <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register2;
