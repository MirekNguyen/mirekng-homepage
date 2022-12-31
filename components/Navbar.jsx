import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
const Navbar = () => {
  function switchTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  const { theme, setTheme } = useTheme();
  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    menu === false ? setMenu(true) : setMenu(false);
  }
  return (
    <nav
      className={`px-5 sm:px-14 bg-transparent dark:text-slate-100 w-screen font-montserrat ${
        menu === false ? "h-auto" : "h-auto"
      }`}
    >
      <ul className="flex justify-center items-center text-xl w-full h-16">
        <li className="mr-auto text-xl sm:text-2xl">
          <Link href="/">Mirek Nguyen</Link>
        </li>
        <li className="ml-5 hidden sm:block">
          <Link href="/">Home</Link>
        </li>
        <li className="ml-5 hidden sm:block">
          <Link href="/contact">Contact</Link>
        </li>
        <li
          className="text-2xl min-w-max hover:cursor-pointer ml-5"
          onClick={switchTheme}
        >
          <img
            width="24px"
            height="24px"
            src={theme === "light" ? "/light-mode.png" : "/dark-mode.png"}
            alt={theme === "light" ? "light-mode-icon" : "dark-mode-icon"}
          ></img>
        </li>
        <li
          className="ml-5 sm:invisible sm:hidden hover:cursor-pointer"
          onClick={toggleMenu}
        >
          <div>
            <span className="block w-6 h-1 my-1 bg-black dark:bg-white"></span>
            <span className="block w-6 h-1 my-1 bg-black dark:bg-white"></span>
            <span className="block w-6 h-1 my-1 bg-black dark:bg-white"></span>
          </div>
        </li>
      </ul>
      <ul
        className={`flex justify-center items-center flex-col ${
          menu === false ? "hidden" : "grid"
        }`}
      >
        <li className="my-10 mx-auto" onClick={toggleMenu}>
          <Link href="/">Home</Link>
        </li>
        <li className="my-10 mx-auto" onClick={toggleMenu}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.displayName = "Navigation bar for pages";
export default Navbar;
