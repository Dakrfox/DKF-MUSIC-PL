import styles from "@styles/Electro.module.scss";
import Image from "next/image";
import play_back from "@icons/play-back-outline.svg";
import play_forward from "@icons/play-forward-outline.svg";
import play_skip_back from "@icons/play-skip-back-outline.svg";
import play_skip_forward from "@icons/play-skip-forward-outline.svg";
import { useRouter } from "next/router";

export default function Electro() {
  const router = useRouter();
  const handleClickNext = (e) => {
    router.push("/rap");
  };
  
  const handleClickBefore = (e) => {
    router.push("/pop");
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
        <h1>ELECTRO</h1>
        <Image className={styles.image} src={play_skip_forward} width={50} height={50} onClick={handleClickNext}/>
        <Image className={styles.image} styles="fill:white" src={play_forward}  width={50} height={50} onClick={handleClickFinish}/>
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
