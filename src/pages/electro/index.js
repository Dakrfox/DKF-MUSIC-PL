import styles from "@styles/Electro.module.scss"

export default function Electro() {
  return (
    <div className={styles.playlist_container}>
      <div className={styles.title}>
        <h1>ELECTRO</h1>
      </div>
      <div className={styles.playlist}>
        <ul className={styles.list}>
          <li className={styles.list_item}>Workout</li>
          <li className={styles.list_item}>Dance</li>
          <li className={styles.list_item}>HARD</li>
          <li className={styles.list_item}>Dubstep</li>
          <li className={styles.list_item}>Trance </li>
          <li className={styles.list_item}>D33P</li>
          <li className={styles.list_item}>After Party</li>
        </ul>
      </div>
    </div>
  );
}
