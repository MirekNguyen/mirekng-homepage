import styles from "../styles/Home.module.css";
import AnimatedPage from "../components/AnimatedPage";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaGamepad,
  FaGlobeEurope,
  FaClipboardList,
  FaFileCode
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import {
  SiNginx,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiUnity,
  SiCsharp,
  SiPhp,
  SiPostgresql,
  SiSymfony,
  SiDocker,
  SiGnubash,
  SiLinux,
  SiFedora,
} from "react-icons/si";
import {
  TbApi
} from "react-icons/tb"
import {
  BiSolidFileJson
} from "react-icons/bi"
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
            width="384"
            height="256"
          />
          <Image
            src="/images/nginx.png"
            alt="Nginx"
            layout="fixed"
            width="285"
            height="96"
          />
        </div>
        <blockquote className="mx-20 max-w-2xl pb-4">
          My personal website and most of my projects are hosted on a Raspberry
          Pi 4 using Nginx. The front-end of this website is built using React
          library and Next.js framework. Styling is achieved with TailwindCSS.
        </blockquote>
        <div className="flex items-center gap-4 pb-8">
          <p className="inline">Technologies:</p>
          <SiNextdotjs title="Next.js" size="32" />
          <SiReact title="React" size="32" />
          <SiTailwindcss title="TailwindCSS" size="32" />
          <SiNginx title="Nginx" size="32" />
        </div>
        <Link href="https://github.com/MirekNguyen/mirekng-homepage">
          <button className="flex items-center mb-8 text-2xl sm:text-2xl text-white dark:bg-transparent bg-gray-800 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
            Code
            <FaGithub className="ml-2 inline" />
          </button>
        </Link>
        <hr className="w-screen max-w-2xl h-px bg-black dark:bg-white border-0 my-8" />
        <h1 id="dungeon" className="flex place-items-center text-3xl pb-8 pt-4">
          Dungeon game
        </h1>
        <div className="w-screen h-auto flex flex-col md:flex-row items-center justify-center">
          <Image
            src="/images/dungeon.jpg"
            alt="Dungeon preview"
            width="453"
            height="256"
            fill
          />
          <Image
            src="/images/dungeon-2.jpg"
            alt="Dungeon preview 2"
            width={453}
            height={256}
            fill
          />
        </div>
        <blockquote className="mx-20 max-w-2xl pt-8 pb-4">
          This is a Unity C# program for maturita which is a dungeon game with
          procedural generation. The game randomly generates dungeons each time
          it is played, providing a unique experience for each playthrough. It
          is now available for playing on itch.io, as it was exported using
          WebGL.
        </blockquote>
        <div className="flex items-center gap-4 pb-8">
          <p className="inline">Technologies:</p>
          <SiUnity title="Unity" size="32" />
          <SiCsharp title="C#" size="32" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Link href="https://mireknguyen.itch.io/dungeon">
            <button className="flex place-items-center text-2xl sm:text-2xl text-white bg-red-400 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Try it
              <FaGamepad className="ml-2 inline" />
            </button>
          </Link>
          <Link href="/dungeon">
            <button className="flex justify-center place-items-center text-2xl text-white dark:bg-transparent bg-gray-800 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Docs
              <CgFileDocument className="ml-2 inline" />
            </button>
          </Link>
        </div>
        <hr className="w-screen max-w-2xl h-px bg-black dark:bg-white border-0 my-8" />

        <h1 id="self-hosted" className="text-3xl pb-8 pt-4">
          Self hosted
        </h1>
        <div className="w-screen h-auto flex items-center justify-center">
          <Image
            src="/images/self-hosted.png"
            alt="Self-hosted preview"
            width="674px"
            height="293px"
            fill
          />
        </div>
        <blockquote className="mx-20 max-w-2xl pt-8 pb-4">
          This server consists of self-hosted services each running in its own
          subdomain. These services are efficiently managed and isolated using
          Docker containers, ensuring seamless operation. I&apos;ve set up this
          system as a cost-effective alternative to existing paid cloud
          services. The services are orchestrated and supervised using systemd
          and Bash scripts, enabling easy maintenance and scalability.
        </blockquote>
        <div className="flex items-center gap-4 pb-8">
          <p className="inline">Technologies:</p>
          <SiDocker title="Docker" size="32" />
          <SiGnubash title="Bash" size="32" />
          <SiLinux title="Linux" size="32" />
          <SiFedora title="Fedora" size="32" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Link href="https://dashboard.mirekng.net">
            <button className="flex place-items-center text-2xl sm:text-2xl text-white bg-red-400 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Dashboard
              <FaClipboardList className="ml-2 inline" />
            </button>
          </Link>
          <Link href="https://github.com/MirekNguyen/self-hosted">
            <button className="flex justify-center place-items-center text-2xl text-white dark:bg-transparent bg-gray-800 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Github
              <FaGithub className="ml-2 inline" />
            </button>
          </Link>
        </div>
        <hr className="w-screen max-w-2xl h-px bg-black dark:bg-white border-0 my-8" />
        <h1 id="symfony-api" className="text-3xl pb-8 pt-4">
          Symfony Dummy API
        </h1>
        <div className="w-screen h-auto flex flex-col md:flex-row md:gap-2 items-center justify-center">
          <Image
            src="/images/symfony-api-schema.jpg"
            alt="Symfony API preview"
            width="280px"
            height="257px"
            fill
          />
          <Image
            src="/images/schema.jpg"
            alt="Symfony API schema"
            width={453}
            height={256}
            fill
          />
        </div>
        <blockquote className="mx-20 max-w-2xl pt-8 pb-4">
          A sample book lending backend that follows the REST
          API guidelines and includes all the basic CRUD operations. It was
          developed as a practical implementation of the database modeling
          concepts I learned in a university course. Every midnight, the API
          automatically regenerates its dataset to ensure that data is always
          available for testing and demonstration purposes.
        </blockquote>
        <div className="flex items-center gap-4 pb-8">
          <p className="inline">Technologies:</p>
          <SiSymfony title="Symfony" size="32" />
          <SiPhp title="PHP" size="32" />
          <SiDocker title="Docker" size="32" />
          <SiPostgresql title="Postgresql" size="32" />
          <TbApi title="API" size="32" />
        </div>

        <div className="flex gap-4 pb-8 mb-8">
          <Link href="https://api.mirekng.net">
            <button className="flex place-items-center text-2xl sm:text-2xl text-white bg-red-400 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Try API
              <FaFileCode className="ml-2 inline" />
            </button>
          </Link>
          <Link href="https://github.com/MirekNguyen/symfony-api">
            <button className="flex place-items-center text-2xl sm:text-2xl text-white dark:bg-transparent bg-gray-800 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
              Github
              <FaGithub className="ml-2 inline" />
            </button>
          </Link>
        </div>
      </main>
    </AnimatedPage>
  );
};
export default projects;
