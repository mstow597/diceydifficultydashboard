import styles from "./MainNav.module.css";

export default (props) => {
  return (
    <nav className={styles["main-nav"]}>
      <li className={styles["main-nav-item"]} onClick={props.showPlayers}>
        Players
      </li>
      <li className={styles["main-nav-item"]} onClick={props.showMonsters}>
        Monsters
      </li>
      <li className={styles["main-nav-item"]} onClick={props.showEncounter}>
        Encounter
      </li>
    </nav>
  );
};
