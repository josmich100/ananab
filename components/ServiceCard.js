import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
      <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-xl">
        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
          <p className="w-full text-gray-600 text-xs md:text-sm px-6">
            {props.quiz}
          </p>
          <div className="w-full font-bold text-xl text-gray-800 px-6">
            {props.title}
          </div>
          <p className="text-gray-800 text-base px-6 mb-5">
            {props.description}
          </p>
        </a>
      </div>
      <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
        <div className="flex items-center justify-center">
          <button className="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 bg-gradient-to-r from-yellow-200 to-yellow-500 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            {props.btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
