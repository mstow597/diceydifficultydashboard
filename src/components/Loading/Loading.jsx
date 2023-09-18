import dice from "../../../public/imgs/Twenty_sided_dice.png";
import styles from "./Loading.module.css";

export default () => {
  return (
    <div>
      <img className={styles["img-loading"]} src={dice}></img>
    </div>
  );
};
