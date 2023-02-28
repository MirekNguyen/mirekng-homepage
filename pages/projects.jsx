import styles from "../styles/Home.module.css";
import AnimatedPage from "../components/AnimatedPage";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGamepad, FaDungeon, FaGlobeEurope } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
const projects = () => {
  return (
    <AnimatedPage>
      <main className={` ${styles.main} ${styles.center} font-montserrat `}>
        <h1 id="website" className="mt-10 text-3xl pb-8">
          About this website
        </h1>
        <div className="flex justify-center place-items-center flex-col md:flex-row">
          <Image
            src="/images/raspberrypi.png"
            alt="Raspberry Pi"
            width="256px"
            height="256px"
          />
          <Image
            src="/images/nginx.png"
            alt="Nginx"
            layout="fixed"
            width="256"
            height="128"
          />
        </div>
        <blockquote className="mx-20 max-w-2xl pb-4">
          My personal website and most of my projects are hosted on a Raspberry
          Pi 4 using Nginx. The front-end of this website is built using React
          library and Next.js framework. Styling is achieved using TailwindCSS.
        </blockquote>
        <Link href="https://github.com/MirekNguyen/mirekng-homepage">
          <button className="flex place-items-center text-2xl sm:text-2xl text-white dark:bg-transparent bg-gray-800 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
            Code
            <FaGithub className="ml-2 inline" />
          </button>
        </Link>

        <h1
          id="dungeon"
          className="flex place-items-center mt-10 text-3xl py-8"
        >
          <FaDungeon className="mr-2 inline" />
          Dungeon game
        </h1>
        <div className="flex flex-col md:flex-row">
          <Image
            src="/images/dungeon.jpg"
            alt="Dungeon preview"
            width="453"
            height="256"
          />
          <Image
            src="/images/dungeon-2.jpg"
            alt="Dungeon preview 2"
            width={453}
            height={256}
          />
        </div>
        <blockquote className="mx-20 max-w-2xl pt-4 pb-8">
          This is a Unity C# program for maturita which is a dungeon game with
          procedural generation. The game randomly generates dungeons each time
          it is played, providing a unique experience for each playthrough. It
          is now available for playing on itch.io, as it was exported using
          WebGL.
        </blockquote>
        <div className="flex gap-4">
          <Link href="https://mireknguyen.itch.io/dungeon">
            <button className="flex place-items-center text-2xl sm:text-2xl text-white bg-red-400 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Try it
              <FaGamepad className="ml-2 inline" />
            </button>
          </Link>
          <Link href="/dungeon">
            <button className="flex place-items-center text-2xl sm:text-2xl text-white dark:bg-transparent bg-gray-800 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Docs
              <CgFileDocument className="ml-2 inline" />
            </button>
          </Link>
        </div>
        <h1 id="food" className="mt-10 text-3xl pt-4 pb-8">
          Food search website
        </h1>
        <Image
          src="/images/food.jpg"
          alt="Food preview"
          width="366px"
          height="256px"
        />
        <blockquote className="mx-20 max-w-2xl py-8">
          This is a simple project for searching food and recipes, it includes
          calculations for prices and nutritional values. It was developed using
          PHP and utilizes a Postgresql relational database to store and manage
          data.
        </blockquote>
        <div className="flex gap-4">
          <Link href="/food">
            <button className="flex place-items-center text-2xl sm:text-2xl text-white bg-red-400 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Visit
              <FaGlobeEurope className="ml-2 inline" />
            </button>
          </Link>
          <Link href="https://github.com/MirekNguyen/food-search-website">
            <button className="flex place-items-center text-2xl sm:text-2xl text-white dark:bg-transparent bg-gray-800 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Code
              <FaGithub className="ml-2 inline" />
            </button>
          </Link>
        </div>
        <h1 id="food" className="mt-10 text-3xl pt-4 pb-8">
          Vietnamist
        </h1>
        <Image
          src="/images/vietnamist.jpg"
          alt="Vietnamist preview"
          width="412px"
          height="256px"
        />
        <blockquote className="mx-20 max-w-2xl py-8">
          Vietnamist is a web-based application designed to help users learn
          Vietnamese vocabulary in the context of sentences. It is is built
          using PHP and PostgresSQL and uses AJAX to load data asynchronously,
          making the user experience seamless and responsive.
        </blockquote>
        <div className="flex gap-4 pb-8">
          <Link href="/vietnamist">
            <button className="flex place-items-center text-2xl sm:text-2xl text-white bg-red-400 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Visit
              <FaGlobeEurope className="ml-2 inline" />
            </button>
          </Link>
          <Link href="https://github.com/MirekNguyen/vietnamist">
            <button className="flex place-items-center text-2xl sm:text-2xl text-white dark:bg-transparent bg-gray-800 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Code
              <FaGithub className="ml-2 inline" />
            </button>
          </Link>
        </div>
      </main>
    </AnimatedPage>
  );
};
export default projects;
