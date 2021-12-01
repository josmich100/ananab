import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Links from "../components/Links";
import NavBar from "../components/NavBar";
import Form from "../components/ContactForm";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

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
        // background="bg-gray-800"
        children={[
          <Links name="Home" dir="/" active="text-yellow-300" />,
          <Links name="How To" dir="#howto" />,
          <Links name="FAQs" dir="#faqs" />,
        ]}
      />

      <main className="mt-20 md:mt-40 mx-5">
        <div class="container mx-auto h-full">
          <div class="text-center px-3 lg:px-0">
            <h1 class="my-2 text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
              Support
            </h1>
          </div>
        </div>

        <section id="howto" class="border-b py-8">
          <div class="container max-w-5xl mx-auto m-8">
            <h2 class="w-full my-2 text-2xl md:text-3xl font-black leading-tight text-center">
              How To
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
                href="CustomerManual.pdf"
                class="text-yellow-400 text-lg font-bold hover:underline"
                download
              >
                Customers' Manual
              </a>
            </p>
            <p class="mt-2 text-lg md:text-xl">
              <a
                href="DriverManual.pdf"
                class="text-yellow-400 text-lg font-bold hover:underline"
                download
              >
                Drivers' Manual
              </a>
            </p>
            <p class="mt-2 text-lg md:text-xl">
              <a
                href="RenterManual.pdf"
                class="text-yellow-400 text-lg font-bold hover:underline"
                download
              >
                Renters' Manual
              </a>
            </p>
          </div>
        </section>

        <section id="faqs" class="border-b py-8">
          <div class="container max-w-5xl mx-auto m-8">
            <h2 class="w-full my-2 text-2xl md:text-3xl font-black leading-tight text-center">
              FAQs (Frequently Asked Questions)
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

            <h4 class="my-4 text-xl md:text-2xl font-bold">Q&A</h4>
            <p class="m-2 font-bold">Question #1</p>
            <p class="m-2 italic">Answer</p>
            <p class="m-2 font-bold">Question #2</p>
            <p class="m-2 italic">Answer</p>
            <p class="m-2 font-bold">Question #3</p>
            <p class="m-2 italic">Answer</p>
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

        <Footer />
      </main>
    </div>
  );
}
