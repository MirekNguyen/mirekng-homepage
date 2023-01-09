import Link from "next/link";
import styles from "../styles/Home.module.css";
import CardContainer from "../components/index/CardsContainer.jsx";
import AboutBox from "../components/AboutBox.jsx";
import AnimatedPage from "../components/AnimatedPage";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <AnimatedPage>
      <main className={`${styles.main} font-montserrat relative`}>
        <div
          className={` ${styles.splashscreen} ${theme === "light"
              ? styles.splashscreenLight
              : styles.splashscreenDark
            } flex justify-center text-center dark:bg-neutral-900 bg-neutral-300 transition duration-500
`}
        >
          <div className="self-center mb-20">
            <i className="fab fa-github"></i>
            <p className="text-left text-4xl px-10 sm:px-2 sm:text-5xl dark:text-white">
              Hi,
            </p>
            <p className="text-left text-4xl px-10 sm:px-2 sm:text-5xl dark:text-white">
              I am <u>Mirek</u>,
            </p>
            <p className="text-left text-4xl px-10 sm:px-2 sm:text-5xl dark:text-white">
              welcome to my website
            </p>
            <br />
            <p className="px-2">
              I am currently studying computer science to become a web developer
            </p>
            <br />
            <Link href="#projects">
              <button className="text-2xl sm:text-2xl text-white bg-red-400 rounded px-5 py-2 border-white border-2">
                My projects
              </button>
            </Link>
            <Link href="https://github.com/mireknguyen">
              <button className="text-2xl sm:text-2xl text-white bg-red-400 rounded sm:ml-5 px-5 py-2 border-white border-2">
                Github
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
    </AnimatedPage>
  );
}
