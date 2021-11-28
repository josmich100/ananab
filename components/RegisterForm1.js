import React from "react";
import PropTypes from "prop-types";

const RegisterForm1 = ({ errorMessage, onSubmit }) => (
  <form className="flex flex-col" onSubmit={onSubmit}>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          First Name
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="text"
            name="first_name"
            placeholder="Your first name"
            required
          />
        </div>
      </div>
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          Last Name
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="text"
            name="last_name"
            placeholder="Your last name"
            required
          />
        </div>
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          Email Address
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
        </div>
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          Phone Number
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-phone-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="text"
            name="phone"
            placeholder="Your phone number"
            required
          />
        </div>
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          Work Location
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-map-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="text"
            name="location"
            placeholder="Your work location"
            required
          />
        </div>
      </div>
    </div>

    <button
      type="submit"
      className="mx-auto lg:mx-0  gradient text-gray-900 font-bold rounded-full my-6 py-4 px-8 bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
    >
      <a href="register2">Next Step</a>
    </button>

    {errorMessage && <p className="text-red-500 m-1">{errorMessage}</p>}
  </form>
);

export default RegisterForm1;

RegisterForm1.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
};
