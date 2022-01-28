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
        <title>Ananab | Comfort & Convenience Is Just A Call Away</title>
        <meta name="description" content="Ananab official website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style>
        @import
        url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')
      </style>

      <NavBar
        // background="bg-gray-800"
        children={[
          <Links name="Home" dir="/" active="text-yellow-300" />,
          <Links name="About" dir="#about" />,
          <Links name="Contact" dir="#contact" />,
        ]}
      />

      <main className="mt-20 md:mt-40 mx-5">
        <div class="container mx-auto h-full">
          <div class="text-center px-3 lg:px-0 mb-10">
            <h1 class="my-2 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Ananab
            </h1>
            <p class="leading-normal text-base md:text-xl lg:text-2xl mb-8">
              Comfort & Convenience Is Just A Call Away
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
              class="flex flex-1 m-3 md:px-0 md:m-6 w-1/2 rounded shadow-xl"
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
              <p class="text-lg md:text-xl text-center my-8">
                Ananab is an ananym of banana, a major symbol of Gusii land.
                <br />
                Ananab is a taxi app that uses the modern taxi model to provide
                transport services. Unlike the traditional taxi model, which requires clients to search for taxis manually
              </p>
            </div>

            <div class="flex flex-wrap flex-col-reverse sm:flex-row">
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <div class="align-middle">
                  <h3 class="text-2xl md:text-3xl font-bold leading-none mb-3">
                    Earn As You Drive
                  </h3>
                  <p class="text-lg md:text-xl mb-8">
                    Ananab is partnering with individuals who desire to make a
                    living by picking clients and dropping them at their desired
                    points. Ananab will provide its clients (passengers) to our
                    partners (drivers) at demand.
                  </p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <img src="car-deal.jpg" class="w-full rounded-lg shadow-lg" />
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
            Download the App today
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <h3 class="m-3 text-3xl font-extrabold">
            Ananab: Comfort & Convenience Is Just A Call Away
          </h3>
          <p class="leading-normal text-base md:text-xl lg:text-2xl mb-8">
            Available on Google Play Store and Apple Store <br />
            Share this app with your loved ones who would love to use our
            services...
          </p>
        </section>

        <Footer />
      </main>
    </div>
  );
}
