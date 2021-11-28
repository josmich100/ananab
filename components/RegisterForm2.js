import React from "react";
import PropTypes from "prop-types";

const RegisterForm2 = ({ errorMessage, onSubmit }) => (
  <form className="flex flex-col" onSubmit={onSubmit}>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          Vehicle Type
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-format-list-checks text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="text"
            name="vehicle_type"
            placeholder="Your vehicle type"
            required
          />
        </div>
      </div>
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          Vehicle Color
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-select-color text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="text"
            name="vehicle_color"
            placeholder="Your vehicle color"
            required
          />
        </div>
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          Vehicle Number Plate
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-card-search-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="text"
            name="number_plate"
            placeholder="Your number plate"
            required
          />
        </div>
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          Manufacture Year
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-calendar-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="text"
            name="manufacture_year"
            placeholder="Your manufacture year"
            required
          />
        </div>
      </div>
    </div>

    <button
      type="submit"
      className="mx-auto lg:mx-0  gradient text-gray-900 font-bold rounded-full my-6 py-4 px-8 bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
    >
      <a href="register3">Last Step</a>
    </button>

    {errorMessage && <p className="text-red-500 m-1">{errorMessage}</p>}
  </form>
);

export default RegisterForm2;

RegisterForm2.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
};
