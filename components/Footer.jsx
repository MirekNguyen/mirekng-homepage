import styles from "../styles/Home.module.css";
const Footer = () => {
  return (
    <>
      <footer
        className={`${styles.footer} ${"py-10 bg-white dark:bg-neutral-900"}`}
      >
        <p className={`${styles.center} ${"opacity: 0.5;"}`}>
          © Copyright 2022 by Mirek Nguyen. All Rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
