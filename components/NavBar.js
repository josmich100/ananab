import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const NavBar = (props) => {
  const data = props.children;
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <nav
        id="header"
        class={`fixed w-full ${
          theme === "light" ? "bg-nav-light" : "bg-nav-dark"
        } z-50 top-0 py-1 lg:py-2`}
      >
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
          <div class="pl-4 flex items-center">
            <a
              class="text-white no-underline hover:no-underline font-bold text-xl lg:text-3xl"
              href="/"
            >
              <img
                src="/logo1.png"
                alt="Ananab"
                class="h-10 lg:h-16 inline-block fill-current text-yellow-700"
              />
            </a>
          </div>

          <div class="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              class="flex items-center px-3 py-2 border border-gray-500 rounded-full"
            >
              <i className="mdi mdi-menu text-xl text-yellow-300"></i>
            </button>
          </div>

          <div
            class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              {data}
            </ul>

            <a
              href="#"
              class={`bg-gray-700 hover:bg-gray-800 rounded-full p-2 h-10 w-10 flex items-center justify-center`}
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              {theme === "light" && (
                <i className="mdi mdi-white-balance-sunny text-2xl text-yellow-300"></i>
              )}
              {theme === "dark" && (
                <i className="mdi mdi-moon-waxing-crescent text-2xl text-white"></i>
              )}
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
