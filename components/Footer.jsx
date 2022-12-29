import styles from "../styles/Home.module.css";
const Footer = () => {
   return (
      <>
         <footer className={styles.footer}>
            <hr className="width: 100%;border-top: 1px solid black;" />
            <p className={`${styles.center} ${"opacity: 0.5;"}`}>
               © Copyright 2022 by Mirek Nguyen. All Rights reserved.
            </p>
         </footer>
      </>
   );
};

export default Footer;
