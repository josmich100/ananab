import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({ errorMessage, onSubmit }) => (
  <form className="flex flex-col" onSubmit={onSubmit}>
    <div class="w-full px-3 mb-5">
      <label for="" class="text-xs font-semibold px-1">
        Username
      </label>
      <div class="flex">
        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
          <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
        </div>
        <input
          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
          type="text"
          name="username"
          placeholder="Your username"
          required
        />
      </div>
    </div>
    <div class="w-full px-3 mb-5">
      <label for="" class="text-xs font-semibold px-1">
        Password
      </label>
      <div class="flex">
        <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
          <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
        </div>
        <input
          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-yellow-500"
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
      </div>
    </div>

    <button
      className="mx-auto lg:mx-0  gradient text-gray-900 font-bold rounded-full my-6 py-4 px-8 bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      type="submit"
    >
      Login
    </button>

    {errorMessage && <p className="text-red-500 m-1">{errorMessage}</p>}
  </form>
);

export default LoginForm;

LoginForm.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
};
