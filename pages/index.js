import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Links from "../components/Links";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ANANAB</title>
        <meta name="description" content="Ananab official website" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <NavBar
          background="bg-yellow-400"
          children={[
            <Links name="Home" dir="/" />,
            <Links name="About" dir="about" />,
            <Links name="Contact" dir="contact" />,
          ]}
        />
        <Hero />
      </main>

      <footer className="bg-yellow-400">
        <a
          className="text-xl text-gray-900"
          href="https://michina.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <img src="/ananab.svg" width="150" height="40" />
          </span>
        </a>
      </footer>
    </div>
  );
}
