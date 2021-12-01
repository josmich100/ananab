import React from "react";
import PropTypes from "prop-types";

const ContactForm = ({ errorMessage, onSubmit }) => (
  <form className="flex flex-col p-10" onSubmit={onSubmit}>
    <h5 className="text-3xl text-center font-bold">Contact Form</h5>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-5">
        <label for="" class="text-xs font-semibold px-1">
          Name
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
          </div>
          <input
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-500"
            type="text"
            name="name"
            placeholder="Your name"
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
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-500"
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
          Message
        </label>
        <div class="flex">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <i class="mdi mdi-comment-outline text-gray-400 text-lg"></i>
          </div>
          <textarea
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-gray-500"
            name="message"
            placeholder="Your message"
            required
          ></textarea>
        </div>
      </div>
    </div>

    <button
      type="submit"
      className="mx-auto lg:mx-0 bg-gray-700 hover:bg-gray-800 text-white text-lg font-extrabold rounded py-2 px-4 shadow-lg"
    >
      <a href="register2">Send Message</a>
    </button>

    {errorMessage && <p className="text-red-500 m-1">{errorMessage}</p>}
  </form>
);

export default ContactForm;

ContactForm.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
};
