import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Links from "../components/Links";
import NavBar from "../components/NavBar";
import Form from "../components/ContactForm";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    /*Toggle dropdown list*/
    /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;
    function check(e) {
      var target = (e && e.target) || (event && event.srcElement);

      //Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else {
            navMenuDiv.classList.add("hidden");
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add("hidden");
        }
      }
    }

    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t == elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    }
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    event.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      // mutateUser(
      //   await fetchJson("/api/login", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(body),
      //   })
      // );
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return (
    <div>
      <Head>
        <title>ANANAB</title>
        <meta name="description" content="Ananab official website" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>

      <NavBar
        background="bg-nav-black"
        children={[
          <Links name="Home" dir="/" active="text-yellow-300" />,
          <Links name="About" dir="#about" />,
          <Links name="Contact" dir="#contact" />,
        ]}
      />

      <main className="mt-20 md:mt-40 h-screen mx-5">
        <div class="container mx-auto h-full">
          <div class="text-center px-3 lg:px-0">
            <h1 class="my-2 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Ananab Cabs
            </h1>
            <p class="leading-normal text-base md:text-xl lg:text-2xl mb-8">
              Comfortable, Fast & Efficient
            </p>

            <a
              href="#about"
              class="mx-auto lg:mx-0 bg-gray-700 hover:bg-gray-800 text-lg text-white font-bold rounded py-2 px-4 shadow-lg w-32"
            >
              Learn More
            </a>
          </div>

          <div class="flex items-center w-full mx-auto content-end">
            <img
              class="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 w-1/2 rounded shadow-xl"
              src="driver-door.jpg"
            />
          </div>
        </div>

        <section id="about" class="border-b py-8">
          <div class="container max-w-5xl mx-auto m-8">
            <h2 class="w-full my-2 text-3xl md:text-4xl font-black leading-tight text-center">
              About
            </h2>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div class="flex flex-wrap">
              <h3 class="m-3 text-lg md:text-xl text-center">
                Ananab is a company developed to curb the technology gap in
                providing innovative ideas to suit public demands. It was
                established out of a desire to provide instant transport
                services by a click or touch to offer new opportunities to the
                desiring public to meet demand and control expectation hence
                making public transport reliable.
              </h3>

              <div class="w-5/6 sm:w-1/2 p-6">
                <h3 class="text-2xl md:text-3xl font-bold leading-none mb-3">
                  Earn As You Drive
                </h3>
                <p class="text-lg md:text-xl mb-8">
                  Ananab is partnering with individuals who desire to make a
                  living by picking clients and dropping them at their desired
                  points. Ananab will provide its clients (passengers) to our
                  partners (drivers) at demand.
                  <br />
                  <br />
                  Images from:
                  <a
                    class="text-orange-500 underline"
                    href="https://undraw.co/"
                  >
                    undraw.co
                  </a>
                </p>
              </div>
              <div class="w-full sm:w-1/2 p-6">
                <img
                  src="taxi-driver.jpg"
                  class="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div class="flex flex-wrap flex-col-reverse sm:flex-row">
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <img src="car-deal.jpg" class="w-full rounded-lg shadow-lg" />
              </div>
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <div class="align-middle">
                  <h3 class="text-2xl md:text-3xl font-bold leading-none mb-3">
                    Earn By Renting Your Car
                  </h3>
                  <p class="text-lg md:text-xl mb-8">
                    Ananab is offering opportunities to individuals who wish to
                    rent out their vehicles to our clients to earn money.
                    <br />
                    <br />
                    Images from:
                    <a
                      class="text-orange-500 underline"
                      href="https://undraw.co/"
                    >
                      undraw.co
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="border-b py-8">
          <div class="container mx-auto flex flex-wrap pt-4 pb-12">
            <h2 class="w-full my-2 text-2xl md:text-3xl font-black leading-tight text-center">
              Ask a Question
            </h2>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>

            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 rounded-xl overflow-hidden shadow-xl p-4">
                <div className="flex flex-col p-3 text-center">
                  <h2 class="w-full text-xl md:text-2xl font-bold md:text-sm pt-5 px-5">
                    Contact Details
                  </h2>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <h5 className="text-lg md:text-xl font-bold mt-5">
                        <i className="mdi mdi-phone"></i> Call/Text
                      </h5>
                      <a href="tel:+254700000000">
                        <p className="text-xl m-2">+254 700 000 000</p>
                      </a>

                      <h5 className="text-lg md:text-xl font-bold mt-5">
                        <i className="mdi mdi-email"></i> Email
                      </h5>
                      <a href="mailto:ananabcabs@gmail.com">
                        <p className="text-xl m-2">ananabcabs@gmail.com</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 rounded overflow-hidden shadow">
                <div className="w-full md:w-2/3 rounded overflow-hidden rounded-xl shadow-2xl">
                  <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="gradient w-full mx-auto text-center pt-6 pb-12 border-b">
          <h2 class="w-full my-2 text-2xl md:text-4xl font-black leading-tight text-center">
            Call to Action
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <h3 class="m-3 text-3xl font-extrabold">
            Ananab: Comfortable, Fast & Efficient
          </h3>
          <p class="leading-normal text-base md:text-xl lg:text-2xl mb-8">
            Share this app with your loved ones who would love to use our
            services... Share this with love for awesome services...
          </p>
        </section>

        <Footer />
      </main>
    </div>
  );
}
