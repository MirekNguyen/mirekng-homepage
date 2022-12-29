import Head from "next/head";
const HeadProp = () => {
   return (
      <>
         <Head>
            <title>Mirek Nguyen | Personal website</title>
            <meta
               name="description"
               content="Mirek Nguyen is currently a student and an aspiring website developer. Welcome to my personal website."
            />
            <meta
               name="viewport"
               content="width=device-width,initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
      </>
   );
};
export default HeadProp;
