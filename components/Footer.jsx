import styles from "../styles/Home.module.css";
const Footer = () => {
  return (
    <>
      <footer
        className={`${styles.footer} ${"py-6 bg-gray-100 dark:bg-neutral-900 text-center"}`}
      >
        <p className={`${styles.center} ${"opacity: 0.5;"}`}>
          © Copyright 2024 by Mirek Nguyen. All Rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
