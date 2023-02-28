import styles from "../styles/Home.module.css";

const Dungeon = () => {
  return (
    <main className={` ${styles.main} ${styles.center} font-montserrat `}>
      <embed src="dungeon.pdf" width="100%" height="100%" />
    </main>
  );
};
export default Dungeon;
