import Link from "next/link";
import styles from "../styles/Home.module.css";
import AnimatedPage from "../components/AnimatedPage";
import { useTheme } from "next-themes";
import { FaGithub, FaDev } from "react-icons/fa";
const projectsButton = (
  <Link href="/projects">
    <button className="flex place-items-center text-2xl sm:text-2xl text-white bg-red-400 rounded px-5 py-2 border-white border-2">
      Projects
      <FaDev className="ml-2 inline" />
    </button>
  </Link>
);
const githubButton = (
  <Link href="https://github.com/mireknguyen">
    <button className="flex place-items-center text-2xl sm:text-2xl text-white bg-red-400 rounded sm:ml-5 px-5 py-2 border-white border-2">
      Github
      <FaGithub className="ml-2 inline" />
    </button>
  </Link>
);
const text = (
  <>
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
      As a student pursuing a degree in computer science, I aspire to build a
      career in web development.
    </p>
  </>
);
const Home = () => {
  const { theme } = useTheme();
  const splashscreen_mode = theme === "light" ? styles.splashscreenLight : styles.splashscreenDark;
  const splashscreen = `${styles.splashscreen} ${splashscreen_mode} flex justify-center text-center dark:bg-neutral-900 bg-neutral-300 transition duration-500`;
  return (
    <AnimatedPage>
      <main className={`${styles.main} font-montserrat relative`}>
        <div className={splashscreen} >
          <div className="self-center mb-20 mt-20 sm:mt-0">
            {text}
            <br />
            <div className="flex sm:flex-row flex-col place-items-center justify-center gap-4">
              {projectsButton}
              {githubButton}
            </div>
            <br />
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
};
export default Home;
