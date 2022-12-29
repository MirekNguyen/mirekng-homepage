import styles from "../../styles/Home.module.css";
import Card from "../Card.jsx";
const CardsContainer = () => {
   return (
      <>
         <div className={styles.center}>
            <div
               className={`${styles.projectsContainer
                  } ${"bg-stone-100 rounded-xl"}`}
            >
               <Card title="Food" href="food" />
               <Card title="Vietnamist" href="vietnamist" />
               <Card title="Quiz" href="quiz" />
            </div>
         </div>
      </>
   );
};
export default CardsContainer;
