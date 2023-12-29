import { FaGithub, FaFileCode } from "react-icons/fa";
import { SiPhp, SiPostgresql, SiSymfony, SiDocker } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
const SymfonyApi = () => {
  return (
    <>
      <h1 id="symfony-api" className="text-3xl pb-8 pt-4">
        Symfony Dummy API
      </h1>
      <div className="w-screen h-auto flex flex-col md:flex-row gap-2 items-center justify-center">
        <Image
          src="/images/projects/symfony-api/schema.jpg"
          alt="Symfony API schema"
          width={453}
          height={256}
          className="rounded-md"
        />
        <Image
          src="/images/projects/symfony-api/symfony-api-schema.jpg"
          alt="Symfony API preview"
          width={280}
          height={256}
          className="rounded-md"
        />
      </div>
      <blockquote className="mx-20 max-w-2xl pt-8 pb-4">
        A sample book lending backend that follows the REST API guidelines and
        includes all the basic CRUD operations. It was developed as a practical
        implementation of the database modeling concepts I learned in a
        university course. Every midnight, the API automatically regenerates its
        dataset to ensure that data is always available for testing and
        demonstration purposes.
      </blockquote>
      <div className="flex items-center gap-4 pb-8">
        <p className="inline">Technologies:</p>
        <SiSymfony title="Symfony" size="32" />
        <SiPhp title="PHP" size="32" />
        <SiDocker title="Docker" size="32" />
        <SiPostgresql title="Postgresql" size="32" />
        <TbApi title="API" size="32" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Link href="https://api.mirekng.com">
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
    </>
  );
};
export default SymfonyApi;
