import * as React from "react";

export default function Footer() {
  return (
    <footer>
      <div class="container mx-auto mt-8 px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-1 mb-6">
            <a
              class="text-white no-underline hover:no-underline font-bold text-2xl md:text-4xl"
              href="/"
            >
              <img
                src="/logo1.png"
                alt="Ananab"
                class="h-20 inline-block fill-current text-yellow-700"
              />
            </a>
            <br />
            <br />

            <p class="text-gray-500">&copy; 2021 Ananab Cabs</p>
          </div>

          <div class="flex-1">
            <p class="uppercase font-extrabold text-gray-500 md:mb-6">Links</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="support"
                  class="font-light no-underline hover:underline hover:text-orange-500"
                >
                  Support
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  href="legal"
                  class="font-light no-underline hover:underline hover:text-orange-500"
                >
                  Legal
                </a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase font-extrabold text-gray-500 md:mb-6">Social</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  target="_blank"
                  href="#"
                  class="font-light no-underline hover:underline hover:text-orange-500"
                >
                  <i className="mdi mdi-facebook text-blue-500"></i> Facebook
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  target="_blank"
                  href="https://twitter.com/AnanabCabs"
                  class="font-light no-underline hover:underline hover:text-orange-500"
                >
                  <i className="mdi mdi-twitter text-blue-400"></i> Twitter
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  target="_blank"
                  href="https://www.instagram.com/p/CWhu4hAoK0i/"
                  class="font-light no-underline hover:underline hover:text-orange-500"
                >
                  <i className="mdi mdi-instagram text-red-400"></i> Instagram
                </a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCRZX0hYGepMAUMXRRfDHQ-A"
                  class="font-light no-underline hover:underline hover:text-orange-500"
                >
                  <i className="mdi mdi-youtube text-red-600"></i> Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
