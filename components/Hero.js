import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="h-full bg-yellow-400">
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="mb-10 text-4xl font-bold leading-tight">
              Comfortable, Fast & Efficient
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Wonderful transportation services by amazing service providers for
              awesome clientele connected by the most deserving Ananab app.{" "}
              <br />
            </p>
            <p className="text-2xl font-bold">At service every single day.</p>
            <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <a href="/register">Register Now</a>
            </button>
          </div>

          <div className="w-full md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src="hero.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
