import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/card";
import Navbar from "../components/navbar";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
   const [theme, setTheme] = useState("dark");
   function clickMe() {
      theme === "dark" ? setTheme("light") : setTheme("dark");
   }
   return (
      <div className={styles.container}>
         <Head>
            <title>Mirek Nguyen</title>
            <meta name="description" content="Mirek Nguyen" />
            <meta
               name="viewport"
               content="width=device-width,initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main className={`${theme} font-montserrat transition duration-500`}>
            <Navbar theme={theme} setTheme={setTheme} />
            <div className="grid place-items-center border-gray-800 h-screen bg-zinc-50 dark:bg-neutral-800 dark:text-slate-100 text-2xl text-center transition duration-500">
               <div>
                  <p>whoami</p>
                  <p className="dark:bg-stone-700 bg-stone-300 px-10 py-5 rounded">
                     Hello, I am a university student and a web developer
                  </p>
                  <p className="align-bottom">bio</p>
                  <p className="text-lg">
                     I was born in Prague, Czech Republic, both my parents
                     migrated from Vietnam.
                  </p>
                  <p>...</p>
                  <br />
                  <Link href='about'>
                     <button className="dark:bg-red-500 rounded px-4 py-2">
                        Read more
                     </button>
                  </Link>
               </div>
            </div>

            <div id="projects" className="flex justify-center">
               <p className="text-2xl">CASE STUDIES</p>
            </div>
            <div className={styles.center}>
               <div className={`${styles.projectsContainer} ${"bg-stone-100 rounded-xl"}`}>
                  <Card title="Food" href="food" />
                  <Card title="Vietnamist" href="vietnamist" />
                  <Card title="Finance" href="finance" />
                  <Card title="Koreanist" href="koreanist" />
                  <Card title="Quiz" href="quiz" />
                  <Card title="Hypixel" href="hypixel" />
                  <Card title="Curl" href="curl" />
                  <Card title="Transmission" href="transmission" />
               </div>
            </div>
         </main>
         <hr className="width: 100%;border-top: 1px solid black;" />
         <footer className={`${styles.footer} ${"h-20"}`}>
            <div className="flex justify-center">
               <p>Github</p>
               <p className="mx-2">Linkedin</p>
            </div>
            <p className={`${styles.center} ${"opacity: 0.5;"}`}>
               © Copyright 2022 by Mirek Nguyen. All Rights reserved.
            </p>
         </footer>
      </div>
   );
}
