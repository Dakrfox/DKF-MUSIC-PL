import styles from "@styles/Rock.module.scss"

export default function Rock() {
  return (
    <div className={styles.playlist_container}>
      <div className={styles.title}>
        <h1>ROCK</h1>
      </div>
      <div className={styles.playlist}>
        <ul className={styles.list}>
          <li className={styles.list_item}>80's Greatest</li>
          <li className={styles.list_item}>Rock en Español</li>
          <li className={styles.list_item}>Rock Classics</li>
          <li className={styles.list_item}>90's Greatest</li>
          <li className={styles.list_item}>Rock N Roll</li>
          <li className={styles.list_item}>Rock N Chill</li>
          <li className={styles.list_item}>Grunge Essentials</li>
        </ul>
      </div>
    </div>
  );
}
