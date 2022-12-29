import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import CardContainer from "../components/index/CardsContainer.jsx"
import HeadProp from "../components/HeadProp.jsx"
import SearchBar from "../components/index/SearchBar.jsx"

export default function Home() {
   const [mount, setMount] = useState(false);
   useEffect(() => {
      setMount(true);
   }, []);
   if (!mount) {
      return null;
   }
   // Switch dark/light theme
   // Toggle search bar
   return (
      <div className={styles.container}>
         <HeadProp />
         <main className={`${styles.main} font-montserrat`}>
            <div className="flex justify-center content-center text-center h-screen dark:bg-neutral-900 bg-neutral-300 transition duration-500">
               <div className="self-center">
                  <p className="text-5xl dark:text-white">
                     Hello, I am a student and a web developer
                  </p>
                  <br />
                  <Link href="about">
                     <button className="text-2xl text-white bg-red-400 rounded px-5 py-2">
                        About me
                     </button>
                  </Link>
                  <br />
               </div>
            </div>
            <SearchBar />
            <CardContainer />
         </main>
      </div>
   );
}
