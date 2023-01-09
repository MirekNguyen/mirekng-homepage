import styles from "../styles/Home.module.css";
const Footer = () => {
  return (
    <>
      <footer
        className={`${styles.footer
          } ${"py-10 bg-gray-100 dark:bg-neutral-900 text-center"}`}
      >
        <p className={`${styles.center} ${"opacity: 0.5;"}`}>
          © Copyright 2022 by Mirek Nguyen. All Rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
