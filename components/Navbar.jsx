import Link from "next/link";
import { useTheme } from "next-themes"
const Navbar = () => {
   const { theme, setTheme } = useTheme();
   function clickMe() {
      // theme === "dark" ? setTheme("light") : setTheme("dark");
      theme === "dark" ? setTheme('light') : setTheme("dark");
      console.log(theme);
   }
   return (
      <nav className="absolute h-16 justify-between px-5 sm:px-20 items-center bg-transparent dark:text-slate-100 w-screen shadow">
         <div className="flex justify-between h-16 items-center">
            <div className="flex justify-between w-1/2 text-2xl font-montserrat sm:w-1/4">
               Mirek Nguyen
            </div>
            <div className="flex sm:hidden">menu</div>
            <ul className="sm:flex justify-between items-center text-xl invisible sm:visible hidden">
               <li>Search</li>
               <li className="ml-5"><Link href="/#projects">Projects</Link></li>
               <li className="ml-5">
                  <Link href="about">About me</Link>
               </li>
               <li className="ml-5"><Link href="contact">Contact</Link></li>
               <li className="ml-5">
                  <button onClick={clickMe}>Switch</button>
               </li>
            </ul>
         </div>
      </nav>
   );
};
Navbar.displayName = "Navigation bar for pages";
export default Navbar;
