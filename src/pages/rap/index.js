import styles from '@styles/Rap.module.scss';
export default function Rap() {
  return (
    <div className={styles.playlist_container}>
      <div className={styles.title}>
        <h1>RAP</h1>
      </div>
      <div className={styles.playlist}>
        <ul className={styles.list}>
          <li className={styles.list_item}>Eminems Greatest Hits</li>
          <li className={styles.list_item}>Hip Hop</li>
          <li className={styles.list_item}>Workout</li>
          <li className={styles.list_item}>90's Greatest</li>
          <li className={styles.list_item}>G(old) school</li>
          <li className={styles.list_item}>This is Drake</li>
        </ul>
      </div>
    </div>
  );
}
