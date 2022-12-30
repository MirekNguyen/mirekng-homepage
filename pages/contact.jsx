import styles from "../styles/Home.module.css";
const Contact = () => {
  return (
    <>
      <main className={`${styles.container} ${styles.main} font-montserrat `}>
        <form action="POST">
          <label htmlFor="text">Email</label>
          <input type="text" placeholder="Your name.."></input>
        </form>
        <article className="flex-1"></article>
      </main>
    </>
  );
};
export default Contact;
