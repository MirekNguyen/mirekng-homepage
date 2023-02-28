import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState, useEffect } from "react";
const Navbar = () => {
  function switchTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  function toggleMenu() {
    menu === false ? setMenu(true) : setMenu(false);
  }
  const burgerMenuIcon = (
    <div>
      <span className="block w-6 h-1 my-1 bg-black dark:bg-white"></span>
      <span className="block w-6 h-1 my-1 bg-black dark:bg-white"></span>
      <span className="block w-6 h-1 my-1 bg-black dark:bg-white"></span>
    </div>
  );
  const darkModeIcon = (
    <Image
      width="24px"
      height="24px"
      src={theme === "light" ? "/light-mode.png" : "/dark-mode.png"}
      alt={theme === "light" ? "light-mode-icon" : "dark-mode-icon"}
    ></Image>
  );
  function burgerMenuExpand(name, href) {
    return (
      <Link href={href}>
        <div
          className="flex justify-center items-center h-20 cursor-pointer"
          onClick={toggleMenu}
        >
          {name}
        </div>
      </Link>
    );
  }
  return (
    <nav
      className={`2xl:flex 2xl:justify-center bg-transparent dark:text-slate-100 w-screen font-montserrat ${
        menu === false ? "h-auto" : "h-auto"
      }`}
    >
      <ul className="flex justify-center items-center text-xl 2xl:w-1/2 w-screen h-16 px-8 sm:px-12 md:px-20 xl:px-28">
        <li className="mr-auto text-xl sm:text-2xl">
          <Link href="/">Mirek Nguyen</Link>
        </li>
        <li className="ml-5 hidden sm:block">
          <Link href="/">Home</Link>
        </li>
        <li className="ml-5 hidden sm:block">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="ml-5 hidden sm:block">
          <Link href="/contact">Contact</Link>
        </li>
        <li
          className="hover:cursor-pointer ml-5 grid place-items-center"
          onClick={switchTheme}
        >
          {darkModeIcon}
        </li>
        <li
          className="ml-5 sm:invisible sm:hidden hover:cursor-pointer"
          onClick={toggleMenu}
        >
          {burgerMenuIcon}
        </li>
      </ul>
      <ul className={`flex flex-col ${menu === false ? "hidden" : "grid"}`}>
        {burgerMenuExpand("Home", "/")}
        {burgerMenuExpand("Projects", "/projects")}
        {burgerMenuExpand("Contact", "/contact")}
      </ul>
    </nav>
  );
};
Navbar.displayName = "Navigation bar for pages";
export default Navbar;
