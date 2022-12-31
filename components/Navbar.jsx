import Link from "next/link";
import { useTheme } from "next-themes";
const Navbar = () => {
  function switchTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  const { theme, setTheme } = useTheme();
  return (
    <nav className="h-16 px-5 sm:px-14 bg-transparent dark:text-slate-100 w-screen font-montserrat">
      <ul className="flex justify-center items-center text-xl w-full h-full">
        <li className="mr-auto text-2xl">
          <Link href="/">Mirek Nguyen</Link>
        </li>
        <li className="ml-5 invisible sm:visible">
          <Link href="/">Home</Link>
        </li>
        <li className="ml-5 invisible sm:visible">
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
        <li className="ml-5 sm:invisible sm:hidden">menu</li>
      </ul>
    </nav>
  );
};
Navbar.displayName = "Navigation bar for pages";
export default Navbar;
