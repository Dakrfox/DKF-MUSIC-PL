import styles from "@styles/Rock.module.scss"
import Image from "next/image";
import play_back from "@icons/play-back-outline.svg";
import play_forward from "@icons/play-forward-outline.svg";
import play_skip_back from "@icons/play-skip-back-outline.svg";
import play_skip_forward from "@icons/play-skip-forward-outline.svg";


export default function Rock() {
  return (
    <div className={styles.playlist_container}>
      <div className={styles.title}>
        <Image className={styles.image} src={play_skip_back} width={50} height={50}/>
        <Image className={styles.image} src={play_back} width={50} height={50}/>
        <h1>ROCK</h1>
        <Image className={styles.image} styles="fill:white" src={play_forward}  width={50} height={50}/>
        <Image className={styles.image} src={play_skip_forward} width={50} height={50}/>
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
