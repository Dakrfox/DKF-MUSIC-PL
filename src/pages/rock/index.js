import styles from "@styles/Rock.module.scss"
import Image from "next/image";
import play_back from "@icons/play-back-outline.svg";
import play_forward from "@icons/play-forward-outline.svg";
import play_skip_back from "@icons/play-skip-back-outline.svg";
import play_skip_forward from "@icons/play-skip-forward-outline.svg";
import { useRouter } from "next/router";
import Footer from "@components/Footer";
import { useState } from "react";
import Card from "@components/card";


export default function Rock() {
  const router = useRouter();
  const handleClickNext = (e) => {
    router.push("/pop");
  };

  const handleClickBefore = (e) => {
    router.push("/rap");
  };

  const handleClickBack = (e) => {
    router.push("/");
  };

  const handleClickFinish = (e) => {
    router.push("/contact");
  };

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className={styles.playlist_container}>
        <div className={styles.title}>
          <Image className={styles.image} src={play_back} width={50} height={50} onClick={handleClickBack} />
          <Image className={styles.image} src={play_skip_back} width={50} height={50} onClick={handleClickBefore} />
          <h1>ROCK</h1>
          <Image className={styles.image} src={play_skip_forward} width={50} height={50} onClick={handleClickNext} />
          <Image className={styles.image} styles="fill:white" src={play_forward} width={50} height={50} onClick={handleClickFinish} />

        </div>
        <div className={styles.playlist}>
          <ul className={styles.list}>
            <li className={styles.list_item} onClick={() => setShowMenu(!showMenu)}>
              80's Greatest Hits
              {(showMenu) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: 25 }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card />
                        </li>
                      ))
                    }

                  </ol>
                </div>)}

            </li>
            <li className={styles.list_item}>Rock en Español</li>
            <li className={styles.list_item}>Rock Classics</li>
            <li className={styles.list_item}>90's Greatest</li>
            <li className={styles.list_item}>Rock N Roll</li>
            <li className={styles.list_item}>Rock N Chill</li>
            <li className={styles.list_item}>Grunge Essentials</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
