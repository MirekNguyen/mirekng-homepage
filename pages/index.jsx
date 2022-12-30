import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import CardContainer from "../components/index/CardsContainer.jsx";
import AboutBox from "../components/AboutBox.jsx";

export default function Home() {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  if (!mount) {
    return null;
  }

  // Switch dark/light theme
  // Toggle search bar
  return (
    <main className={`${styles.main} font-montserrat `}>
      <div
        className={` ${styles.splashscreen} flex justify-center text-center dark:bg-neutral-900 bg-neutral-300 transition duration-500`}
      >
        <div className="self-center mb-20">
          <p className="text-left text-4xl px-2 sm:text-5xl dark:text-white">
            Hi,
          </p>
          <p className="text-left text-4xl px-2 sm:text-5xl dark:text-white">
            I am <u>Mirek</u>
          </p>
          <p className="text-left text-4xl px-2 sm:text-5xl dark:text-white">
            welcome to my website
          </p>
          <br />
          <p className="px-2">
            I am currently studying informatics to become a web developer
          </p>
          <br />
          <Link href="#projects">
            <button className="text-2xl sm:text-2xl text-white bg-red-400 rounded px-5 py-2">
              My projects
            </button>
          </Link>
          <br />
        </div>
      </div>
      <h1 id="projects" className="text-center text-2xl py-3">
        Projects
      </h1>
      <CardContainer />
      <AboutBox />
    </main>
  );
}
