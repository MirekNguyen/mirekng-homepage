import Link from "next/link";
import styles from "../styles/Home.module.css";
import AnimatedPage from "../components/AnimatedPage";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaGithub, FaDev } from "react-icons/fa";

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
          className={` ${styles.splashscreen} ${
            theme === "light"
              ? styles.splashscreenLight
              : styles.splashscreenDark
          } flex justify-center text-center dark:bg-neutral-900 bg-neutral-300 transition duration-500
`}
        >
          <div className="self-center mb-20 mt-20 sm:mt-0">
            <i className="fab fa-github"></i>
            <p className="text-left text-4xl px-12 md:px-8 sm:text-5xl dark:text-white">
              Hi,
            </p>
            <p className="text-left text-4xl px-12 md:px-8 sm:text-5xl dark:text-white">
              I am <u>Mirek</u>,
            </p>
            <p className="text-left text-4xl px-12 md:px-8 sm:text-5xl dark:text-white">
              welcome to my website
            </p>
            <br />
            <p className="px-12 md:px-8">
              As a student pursuing a degree in computer science, I aspire to
              build a career in web development.
            </p>
            <br />
            <div className="flex sm:flex-row flex-col place-items-center justify-center gap-4">
              <Link href="/projects">
                <button className="flex place-items-center text-2xl sm:text-2xl text-white bg-red-400 rounded px-5 py-2 border-white border-2">
                  Projects
                  <FaDev className="ml-2 inline" />
                </button>
              </Link>
              <Link href="https://github.com/mireknguyen">
                <button className="flex place-items-center text-2xl sm:text-2xl text-white bg-red-400 rounded sm:ml-5 px-5 py-2 border-white border-2">
                  Github
                  <FaGithub className="ml-2 inline" />
                </button>
              </Link>
            </div>
            <br />
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
}
