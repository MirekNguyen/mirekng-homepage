import { FaGithub, FaFileCode } from "react-icons/fa";
import { SiPhp, SiPostgresql, SiSymfony, SiDocker } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
const EventManager = () => {
  return (
    <>
      <h1 id="symfony-api" className="text-3xl pb-8 pt-4">
        Event Manager
      </h1>
      <div className="w-screen h-auto flex flex-col md:flex-row gap-2 items-center justify-center">
        <Image
          src="/images/projects/event-manager/event-manager-1.jpg"
          alt="Symfony API schema"
          width={350}
          height={300}
          className="rounded-md"
        />
        <Image
          src="/images/projects/event-manager/event-manager-2.jpg"
          alt="Symfony API preview"
          width={350}
          height={300}
          className="rounded-md"
        />
      </div>
      <blockquote className="mx-20 max-w-2xl pt-8 pb-4">
        This project is a full-stack application developed using Symfony
        framework. It provides an interface for creating, editing,
        and listing events with an administration panel. The application
        supports multiple categories for events, allowing users to easily
        categorize and filter them. The frontend of the application is built
        using Bootstrap.
      </blockquote>
      <div className="flex items-center gap-4 pb-8">
        <p className="inline">Technologies:</p>
        <SiSymfony title="Symfony" size="32" />
        <SiPhp title="PHP" size="32" />
        <SiDocker title="Docker" size="32" />
        <SiPostgresql title="Postgresql" size="32" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Link href="https://event.mirekng.com">
          <button className="flex place-items-center text-2xl sm:text-2xl text-white bg-red-400 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
            Try it
            <FaFileCode className="ml-2 inline" />
          </button>
        </Link>
        <Link href="https://github.com/MirekNguyen/event-manager">
          <button className="flex place-items-center text-2xl sm:text-2xl text-white dark:bg-transparent bg-gray-800 rounded px-5 py-2 dark:border-white border-gray-800 border-2">
            Github
            <FaGithub className="ml-2 inline" />
          </button>
        </Link>
      </div>
    </>
  );
};
export default EventManager;
