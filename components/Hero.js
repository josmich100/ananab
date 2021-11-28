import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="h-full w-full bg-yellow-300 mt-20">
      <div className="pt-10">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="mb-10 text-4xl font-bold leading-tight">
              Comfortable, Fast & Efficient
            </h1>
            <p className="leading-normal text-2xl mb-6">
              Wonderful transportation services by amazing service providers for
              awesome clientele connected by the most deserving Ananab app.{" "}
              <br />
              <p className="text-2xl font-bold">At service every single day.</p>
            </p>
            <button className="text-xl mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <a href="/about">Learn More</a>
            </button>
          </div>

          <div className="flex flex-col w-full md:w-3/5 py-4 text-center">
            <img
              className="bg-gray-100 rounded-xl shadow-lg m-5"
              src="road-trip.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
