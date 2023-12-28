import styles from "../styles/Home.module.css";
import AnimatedPage from "../components/AnimatedPage";
import HomePage from "../components/projects/HomePage";
import Dungeon from "../components/projects/Dungeon";
import SelfHosted from "../components/projects/SelfHosted";
import SymfonyAPI from "../components/projects/SymfonyAPI";
const separator = (
    <hr className="w-screen max-w-2xl h-px bg-black dark:bg-white border-0 my-8" />
);
const projects = () => {
  return (
    <AnimatedPage>
      <main className={` ${styles.main} ${styles.center} font-montserrat `}>
        <HomePage />
        {separator}
        <Dungeon />
        {separator}
        <SelfHosted />
        {separator}
        <SymfonyAPI />
      </main>
    </AnimatedPage>
  );
};
export default projects;
