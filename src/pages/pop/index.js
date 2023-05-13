import styles from '@styles/Pop.module.scss';
export default function Pop() {
  return (
    <div className={styles.playlist_container}>
      <div className={styles.title}>
        <h1>POP</h1>
      </div>
      <div className={styles.playlist}>
        <ul className={styles.list}>
          <li className={styles.list_item}>This is Taylor Swift</li>
          <li className={styles.list_item}>KPOP</li>
          <li className={styles.list_item}>Girls power</li>
          <li className={styles.list_item}>Dance Pop</li>
          <li className={styles.list_item}>soft pop</li>
          <li className={styles.list_item}>00' greatest Hit</li>
        </ul>
      </div>
    </div>
  );
}
