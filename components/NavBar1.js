import React, { useState } from "react";
import Image from "next/image";
import Links from "./Links";

const NavBar = (props) => {
  const data = props.children;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div>
      <nav
        id="header"
        className={`fixed w-full ${props.background} z-30 top-0 text-white text-lg font-bold`}
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a
              className="toggleColour relative text-white no-underline hover:no-underline font-bold text-7xl"
              href="/"
            >
              {/* <Image
                className="h-8 fill-current inline"
                src="/ananab.svg"
                alt="Vercel Logo"
                layout="fill"
              /> */}
              {/* <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
              <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
              <path
                className="plane-take-off"
                d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
              />
            </svg> */}
              <img className="h-20 p-1 z-1" src="logo.png" />
              {/* ANANAB */}
            </a>
          </div>

          <div className="dropdown inline-block relative block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-white transform transition hover:scale-110 duration-300 ease-in-out"
              onClick={handleToggle}
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
            {navbarOpen && (
              <ul className="dropdown-menu absolute right-1 text-lg font-bold z-50">
                {data.map((item) => (
                  <li className="w-full bg-gray-100 hover:bg-gray-600 text-gray-800 hover:text-gray-200 py-2 px-4 m-0 block whitespace-no-wrap">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="w-full flex-shrink lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 text-white p-4 lg:p-0 z-20">
            {data}
            {/* <a
              href="/register"
              id="navAction"
              className="mx-auto lg:mx-1  bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-3 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Register
            </a> */}
            {/* <a
              href="/login"
              id="navAction"
              className="mx-auto lg:mx-1  bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-2 px-3 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Login
            </a> */}
          </div>
        </div>
        {/* <hr className="border-b border-gray-100 opacity-25 my-0 py-0" /> */}
      </nav>
    </div>
  );
};

export default NavBar;
