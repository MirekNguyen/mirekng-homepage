import styles from "../styles/Home.module.css";
import Link from "next/link";

const Card = ({ title, href }) => {
   return (
      <Link href={href}>
         <div className={styles.card}>
            <div className={`${styles.cardInside} dark:text-black`}>
               <div className={styles.titleProject}>{title}</div>
               <div className={styles.viewProject}>
                  <span>View project</span>
               </div>
            </div>
         </div>
      </Link>
   );
};
export default Card;
