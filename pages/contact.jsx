import styles from "../styles/Home.module.css";
const Contact = () => {
  return (
    <>
      <main className={` ${styles.main} ${styles.center} font-montserrat `}>
        <div className="text-center w-1/2 min-w-320">
          <h1 className="text-3xl">Contact form</h1>
          <form method="POST" action="/mail.php">
            <label htmlFor="text">Name</label>
            <br />
            <input
              className="py-3 px-1 w-11/12 lg:w-2/3 border-2 border-black dark:bg-slate-100 dark:text-black"
              type="text"
              placeholder="Your name..."
            ></input>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="py-3 px-1 w-11/12 lg:w-2/3 border-2 border-black dark:bg-slate-100 dark:text-black"
              type="email"
              placeholder="Your email..."
            ></input>
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              className="py-3 px-1 w-11/12 lg:w-2/3 h-52 border-2 border-black dark:bg-slate-100 dark:text-black"
              name="message"
              placeholder="Lorem ipsum..."
            ></textarea>
            <br />
            <input
              className="text-2xl text-white bg-red-400 rounded px-5 py-2"
              type="submit"
            ></input>
          </form>
          <article className="flex-1"></article>
        </div>
      </main>
    </>
  );
};
export default Contact;
