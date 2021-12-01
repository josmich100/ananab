import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Links from "../components/Links";
import NavBar from "../components/NavBar";
import Form from "../components/ContactForm";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Terms() {
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
        background="#000"
        children={[
          <Links name="Home" dir="/" active="text-yellow-300" />,
          <Links name="Terms" dir="#terms" />,
          <Links name="Privacy" dir="#privacy" />,
        ]}
      />

      <main className="mt-20 md:mt-40 h-screen mx-5">
        <div class="container mx-auto h-full">
          <div class="text-center px-3 lg:px-0">
            <h1 class="my-2 text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
              Legal
            </h1>
          </div>
        </div>

        <section id="terms" class="border-b py-8">
          <div class="container max-w-5xl mx-auto m-8">
            <h2 class="w-full my-2 text-2xl md:text-3xl font-black leading-tight text-center">
              Terms
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
            </div>

            <h4 class="my-4 text-xl md:text-2xl font-bold">Downloads</h4>
            <p class="mt-2 text-lg md:text-xl">
              <a
                href="OriginalTerms.pdf"
                class="text-yellow-400 text-lg font-bold hover:underline"
                download
              >
                Original Terms
              </a>
            </p>

            <p class="mt-2 text-lg md:text-xl">
              <a
                href="DriversTerms.pdf"
                class="text-yellow-400 text-lg font-bold hover:underline"
                download
              >
                Drivers' Terms
              </a>
            </p>
            <p class="mt-2 text-lg md:text-xl">
              <a
                href="RentalTerms.pdf"
                class="text-yellow-400 text-lg font-bold hover:underline"
                download
              >
                Rental Terms
              </a>
            </p>
          </div>
        </section>

        <section id="privacy" class="border-b py-8">
          <div class="container max-w-5xl mx-auto m-8">
            <h2 class="w-full my-2 text-2xl md:text-3xl font-black leading-tight text-center">
              Privacy
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
            </div>

            <h4 class="my-4 text-xl md:text-2xl font-bold">Downloads</h4>
            <p class="mt-2 text-lg md:text-xl">
              <a
                href="Privacy.pdf"
                class="text-yellow-400 text-lg font-bold hover:underline"
                download
              >
                Privacy Statement
              </a>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
