import React from "react";

const ServiceCard = (props) => {
  return (
    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
      <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-xl">
        <a href="#" class="flex flex-wrap no-underline hover:no-underline">
          <p class="w-full text-gray-600 text-xs md:text-sm px-6">
            {props.quiz}
          </p>
          <div class="w-full font-bold text-xl text-gray-800 px-6">
            {props.title}
          </div>
          <p class="text-gray-800 text-base px-6 mb-5">{props.description}</p>
        </a>
      </div>
      <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
        <div class="flex items-center justify-center">
          <button class="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
