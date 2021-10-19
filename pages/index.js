import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Links from "../components/Links";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Service from "../components/Service";
import ServiceCard from "../components/ServiceCard";
import SplitScreens from "../components/SplitScreens";
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
          children={[
            <Links name="About" dir="about" />,
            <Links name="Contact" dir="contact" />,
          ]}
        />
        <Hero />

        <Section title="About Us" description="Who we are" />
        <SplitScreens
          children={[
            <ServiceCard
              btnName="Talk to us"
              description="Good things happen when people can move, whether across town or toward their dreams. Opportunities appear, open up, become reality. What started as a way to tap a button to get a ride has led to billions of moments of human connection as people around the world go all kinds of places in all kinds of ways with the help of our technology."
            />,
            <img classNameName="w-full md:w-4/5 z-50" src="hero.png" />,
          ]}
        />
      </main>

      <footer classNameName={styles.footer}>
        <a
          href="https://michina.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span classNameName={styles.logo}>
            <img src="/ananab.svg" width="150" height="40" />
          </span>
        </a>
      </footer>
    </div>
  );
}
