import styles from '@styles/Rap.module.scss';
import Image from "next/image";
import play_back from "@icons/play-back-outline.svg";
import play_forward from "@icons/play-forward-outline.svg";
import play_skip_back from "@icons/play-skip-back-outline.svg";
import play_skip_forward from "@icons/play-skip-forward-outline.svg";
import { useRouter } from "next/router";

export default function Rap() {
  const router = useRouter();
  const handleClickNext = (e) => {
    router.push("/rock");
  };
  
  const handleClickBefore = (e) => {
    router.push("/electro");
  };
  
  const handleClickBack = (e) => {
    router.push("/");
  };
  
  const handleClickFinish = (e) => {
    router.push("/contact");
  };
  return (
    <div className={styles.playlist_container}>
      <div className={styles.title}>
      <Image className={styles.image} src={play_back} width={50} height={50} onClick={handleClickBack}/>
        <Image className={styles.image} src={play_skip_back} width={50} height={50} onClick={handleClickBefore}/> 
        <h1>RAP</h1>
        <Image className={styles.image} src={play_skip_forward} width={50} height={50} onClick={handleClickNext}/>
        <Image className={styles.image} styles="fill:white" src={play_forward}  width={50} height={50} onClick={handleClickFinish}/>
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
