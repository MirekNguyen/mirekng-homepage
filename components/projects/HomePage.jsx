import { FaGithub } from "react-icons/fa";
import { SiNginx, SiNextdotjs, SiReact, SiTailwindcss } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
const HomePage = () => {
  return (
    <>
      <h1 id="website" className="mt-10 text-3xl pb-8">
        About this website
      </h1>
      <div className="flex justify-center place-items-center flex-col md:flex-row">
        <Image
          src="/images/raspberrypi.png"
          alt="Raspberry Pi"
          width={384}
          height={256}
        />
        <Image
          src="/images/nginx.png"
          alt="Nginx"
          layout="fixed"
          width={285}
          height={96}
        />
      </div>
      <blockquote className="mx-20 max-w-2xl pb-4">
        My personal website and most of my projects are hosted on a Raspberry Pi
        4 using Nginx. The front-end of this website is built using React
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
    </>
  );
};
export default HomePage;
