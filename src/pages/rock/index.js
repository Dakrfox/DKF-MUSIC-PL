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
import { rock } from "../../data.mjs";

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
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);
  const [showMenu5, setShowMenu5] = useState(false);
  const [showMenu6, setShowMenu6] = useState(false);
  return (
    <>
      <div className={styles.playlist_container}>
        <div className={styles.title}>
          <Image className={styles.image} src={play_back} width={50} height={50} onClick={handleClickBack} />
          <Image className={styles.image} src={play_skip_back} width={50} height={50} onClick={handleClickBefore} />
          <h1>ROCK</h1>
          <Image className={styles.image} src={play_skip_forward} width={50} height={50} onClick={handleClickNext} />
          <Image className={styles.image} src={play_forward} width={50} height={50} onClick={handleClickFinish} />

        </div>
        <div className={styles.playlist}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <a onClick={() => setShowMenu1(!showMenu1)}>80's Greatest Hits</a>
              {(showMenu1) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rock.g80s.length  }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={rock.g80s[i].name} author={rock.g80s[i].author} cover={rock.g80s[i].cover} link={rock.g80s[i].link} key={`item_rock_80s_${i}`} />
                        </li>
                      ))
                    }

                  </ol>
                </div>)}

            </li>
            <li className={styles.list_item}>
              <a onClick={() => setShowMenu(!showMenu)}>Rock en Español</a>
              {(showMenu) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rock.rock_en_español.length }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={rock.rock_en_español[i].name} author={rock.rock_en_español[i].author} cover={rock.rock_en_español[i].cover} link={rock.rock_en_español[i].link} key={`item_rock_en_español_${i}`} />
                        </li>
                      ))
                    }

                  </ol>
                </div>)}

            </li>
            <li className={styles.list_item}>
              <a onClick={() => setShowMenu2(!showMenu2)}>Rock Classics</a>
              {(showMenu2) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rock.g90s.length }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={rock.rock_Classics[i].name} author={rock.rock_Classics[i].author} cover={rock.rock_Classics[i].cover} link={rock.rock_Classics[i].link} key={`item_rock_clasics_${i}`} />
                        </li>
                      ))
                    }

                  </ol>
                </div>)}
            </li>
            <li className={styles.list_item}>
              <a onClick={() => setShowMenu3(!showMenu3)}>90's Greatest</a>
              {(showMenu3) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rock.g90s.length }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={rock.g90s[i].name} author={rock.g90s[i].author} cover={rock.g90s[i].cover} link={rock.g90s[i].link} key={`item_rock_90s_${i}`} />
                        </li>
                      ))
                    }

                  </ol>
                </div>)}
            </li>
            <li className={styles.list_item}>
              <a onClick={() => setShowMenu4(!showMenu4)}>Rock N Roll</a>
              {(showMenu4) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rock.rock_n_roll.length }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={rock.rock_n_roll[i].name} author={rock.rock_n_roll[i].author} cover={rock.rock_n_roll[i].cover} link={rock.rock_n_roll[i].link} key={`rock_n_roll${i}`} />
                        </li>
                      ))
                    }
                  </ol>
                </div>)}
            </li>
            <li className={styles.list_item}>
            <a onClick={() => setShowMenu5(!showMenu5)}>Rock N Chill</a>
              {(showMenu5) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rock.rock_n_Chill.length }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={rock.rock_n_Chill[i].name} author={rock.rock_n_Chill[i].author} cover={rock.rock_n_Chill[i].cover} link={rock.rock_n_Chill[i].link} key={`rock_n_Chill${i}`} />
                        </li>
                      ))
                    }
                  </ol>
                </div>)}
              </li>
            <li className={styles.list_item}>
            <a onClick={() => setShowMenu6(!showMenu6)}>Grunge Essentials</a>
              {(showMenu6) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rock.grunge.length }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={rock.grunge[i].name} author={rock.grunge[i].author} cover={rock.grunge[i].cover} link={rock.grunge[i].link} key={`grunge${i}`} />
                        </li>
                      ))
                    }
                  </ol>
                </div>)}
              
              </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
