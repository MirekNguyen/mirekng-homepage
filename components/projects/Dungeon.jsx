import Link from "next/link";
import Image from "next/image";
import { SiUnity, SiCsharp } from "react-icons/si";
import { CgFileDocument } from "react-icons/cg";
import { FaGamepad } from "react-icons/fa";
const Dungeon = () => {
  return (
    <>
      <h1 id="dungeon" className="flex place-items-center text-3xl pb-8 pt-4">
        Dungeon game
      </h1>
      <div className="w-screen h-auto flex flex-col md:flex-row items-center justify-center">
        <Image
          src="/images/dungeon.jpg"
          alt="Dungeon preview"
          width={453}
          height={256}
        />
        <Image
          src="/images/dungeon-2.jpg"
          alt="Dungeon preview 2"
          width={453}
          height={256}
        />
      </div>
      <blockquote className="mx-20 max-w-2xl pt-8 pb-4">
        This is a Unity C# program for maturita which is a dungeon game with
        procedural generation. The game randomly generates dungeons each time it
        is played, providing a unique experience for each playthrough. It is now
        available for playing on itch.io, as it was exported using WebGL.
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
    </>
  );
};
export default Dungeon;
