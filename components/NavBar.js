import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Links from "./Links";

const NavBar = (props) => {
  const data = props.children;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const { theme, setTheme } = useTheme();

  return (
    <div>
      <nav
        id="header"
        class={`w-full ${props.background} z-30 top-0 py-1 lg:py-2`}
      >
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
          <div class="pl-4 flex items-center">
            <a
              class="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="/"
            >
              <img
                src="/logo1.png"
                alt="Ananab"
                class="h-20 inline-block fill-current text-yellow-700"
              />
            </a>
          </div>

          <div class="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
            >
              <svg
                class="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
              <li class="mr-3">
                <a
                  class={`inline-block ${props.active} py-2 px-4 text-xl font-bold no-underline`}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li class="mr-3">
                <a
                  class={`inline-block ${props.active} text-xl no-underline py-2 px-4`}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li class="mr-3">
                <a
                  class={`inline-block ${props.active} text-xl no-underline py-2 px-4`}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>

            <style>
              @import
              url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
            </style>

            <a
              href="#"
              class={`bg-gray-700 hover:bg-gray-800 rounded-full p-2 h-10 w-10 flex items-center justify-center`}
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              {theme === "light" && (
                <i className="mdi mdi-white-balance-sunny text-2xl text-yellow-300 z-10"></i>
              )}
              {theme === "dark" && (
                <i className="mdi mdi-moon-waxing-crescent text-2xl text-white z-10"></i>
              )}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
