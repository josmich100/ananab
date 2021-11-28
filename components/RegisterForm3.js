import React from "react";
import PropTypes from "prop-types";

const RegisterForm2 = ({ errorMessage, onSubmit }) => (
  <form className="flex flex-col" onSubmit={onSubmit}>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          National ID
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-badge-account-horizontal-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="text"
            name="national_id"
            placeholder="Your national id"
            required
          />
        </div>
      </div>
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          Driver's License No.
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-badge-account-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="text"
            name="drivers_license"
            placeholder="Your driver's license number"
            required
          />
        </div>
      </div>
    </div>

    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          PICTURE: Profile Photo
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="file"
            name="profile_photo"
            placeholder="Your profile photo"
            required
          />
        </div>
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          PICTURE: National ID
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-badge-account-horizontal-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="file"
            name="national_id_doc"
            placeholder="Your national ID picture"
            required
          />
        </div>
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          PICTURE: Driver's License
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-badge-account-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="file"
            name="national_id_doc"
            placeholder="Your national ID picture"
            required
          />
        </div>
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          PICTURE: NTSA PSV license
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-road-variant text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="file"
            name="national_id_doc"
            placeholder="Your national ID picture"
            required
          />
        </div>
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          PICTURE: Police Clearance - Certificate of Good Conduct
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-police-badge-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
            type="file"
            name="national_id_doc"
            placeholder="Your national ID picture"
            required
          />
        </div>
      </div>
    </div>

    <button
      type="submit"
      className="mx-auto lg:mx-0  gradient text-gray-900 font-bold rounded-full my-6 py-4 px-8 bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
    >
      Complete Registration
    </button>

    {errorMessage && <p className="text-red-500 m-1">{errorMessage}</p>}
  </form>
);

export default RegisterForm2;

RegisterForm2.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
};
