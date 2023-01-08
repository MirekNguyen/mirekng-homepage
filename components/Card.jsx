import styles from "../styles/Home.module.css";
import Link from "next/link";

const Card = ({ title, href, info }) => {
  const click = (e) => {
    e.stopPropagation();
  };
  return (
    <Link href={href}>
      <div
        onClick={click}
        className={`grid h-24 md:h-52 place-items-center text-center xl:w-1/2 xl:float-left`}
      >
        <div className={`${styles.cardInside} dark:text-black`}>
          <div className={styles.titleProject}>{title}</div>
          <div className={styles.cardLink}>
            <Link href={href}>
              <span className="hover:bg-slate-500 rounded p-1" onClick={click}>
                View project
              </span>
            </Link>
            <Link href={info}>
              <span
                onClick={click}
                className="hover:bg-slate-500 sm:ml-5 rounded p-1"
              >
                More info
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
