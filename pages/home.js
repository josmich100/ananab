import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Links from "../components/Links";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home1() {
  return (
    <div>
      <Head>
        <title>ANANAB</title>
        <meta name="description" content="Ananab official website" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="bg-yellow-300">
        {/* <div className="h-full w-full bg-yellow-300"> */}
        <NavBar
          background="bg-gray-800"
          children={[
            <Links name="Home" dir="/" active="text-yellow-300" />,
            <Links name="About" dir="about" />,
            <Links name="Contact" dir="contact" />,
          ]}
        />

        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mt-20 py-10">
          <div className="px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-3/5 py-4 text-center">
              <img
                className="bg-gray-100 rounded-xl shadow-lg mx-2 lg:mx-10"
                src="road-trip.jpg"
              />
            </div>

            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center sm:text-left">
              <h1 className="mb-10 text-2xl sm:text-4xl font-bold leading-tight m-2 lg:m-5">
                Comfortable, Fast & Efficient
              </h1>
              <p className="leading-normal text-xl sm:text-2xl mb-6">
                Wonderful transportation services by amazing service providers
                for awesome clientele connected by the most deserving Ananab
                app. <br />
                <p className="text-xl sm:text-2xl font-bold">
                  At service every single day.
                </p>
              </p>
              <button className="text-xl mx-auto lg:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                <a href="/about">Learn More</a>
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </main>
    </div>
  );
}
