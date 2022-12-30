import Link from "next/link";
import { useTheme } from "next-themes";
const Navbar = () => {
  function switchTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }
  const { theme, setTheme } = useTheme();
  return (
    <nav className="h-16 justify-between px-5 sm:px-20 items-center bg-transparent dark:text-slate-100 w-screen shadow">
      <div className="flex justify-between h-16 items-center relative">
        <div className="flex justify-between w-full text-xl sm:text-2xl font-montserrat">
          <Link href="/">Mirek Nguyen</Link>
        </div>
        <div className="flex sm:hidden">menu</div>
        <ul className="sm:flex justify-between items-center text-xl invisible sm:visible hidden">
          <li className="ml-5">
            <Link href="/">Home</Link>
          </li>
          <li className="ml-5">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="ml-5 text-2xl min-w-max">
            <button onClick={switchTheme}>
              {theme === "light" ? (
                <img
                  src={`/light-mode.png`}
                  alt="light-mode-icon"
                  width="24px"
                  height="24px"
                ></img>
              ) : (
                <img
                  src={`/dark-mode.png`}
                  alt="dark-mode-icon"
                  width="24px"
                  height="24px"
                ></img>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
Navbar.displayName = "Navigation bar for pages";
export default Navbar;
