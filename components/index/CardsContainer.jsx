import styles from "../../styles/Home.module.css";
import Card from "../Card.jsx";
const CardsContainer = () => {
  return (
    <>
      <div className={styles.center}>
        <div
          className={`${styles.projectsContainer} ${"bg-stone-100 rounded-xl"}`}
        >
          <Card title="Food" href="food" info="projects#food" />
          <Card
            title="Vietnamist"
            href="vietnamist"
            info="projects#vietnamist"
          />
          <Card
            title="Dungeon game"
            href="vietnamist"
            info="projects#dungeon"
          />
        </div>
      </div>
    </>
  );
};
export default CardsContainer;
