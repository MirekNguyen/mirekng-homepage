import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaClipboardList } from "react-icons/fa";
import { SiDocker, SiGnubash, SiLinux, SiFedora } from "react-icons/si";
const SelfHosted = () => {
  return (
    <>
      <h1 id="self-hosted" className="text-3xl pb-8 pt-4">
        Self hosted
      </h1>
      <div className="w-screen h-auto flex items-center justify-center">
        <Image
          src="/images/self-hosted.png"
          alt="Self-hosted preview"
          width={674}
          height={293}
        />
      </div>
      <blockquote className="mx-20 max-w-2xl pt-8 pb-4">
        This server consists of self-hosted services each running in its own
        subdomain. These services are efficiently managed and isolated using
        Docker containers, ensuring seamless operation. I&apos;ve set up this
        system as a cost-effective alternative to existing paid cloud services.
        The services are orchestrated and supervised using systemd and Bash
        scripts, enabling easy maintenance and scalability.
      </blockquote>
      <div className="flex items-center gap-4 pb-8">
        <p className="inline">Technologies:</p>
        <SiDocker title="Docker" size="32" />
        <SiGnubash title="Bash" size="32" />
        <SiLinux title="Linux" size="32" />
        <SiFedora title="Fedora" size="32" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Link href="https://dashboard.mirekng.com">
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
    </>
  );
};
export default SelfHosted;
