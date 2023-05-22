import styles from '@styles/Rap.module.scss';
import Image from "next/image";
import play_back from "@icons/play-back-outline.svg";
import play_forward from "@icons/play-forward-outline.svg";
import play_skip_back from "@icons/play-skip-back-outline.svg";
import play_skip_forward from "@icons/play-skip-forward-outline.svg";
import { useRouter } from "next/router";
import { useState } from 'react';
import { rap } from 'data.mjs';
import Card from '@components/card';

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
  
  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);
  const [showMenu5, setShowMenu5] = useState(false);
  const [showMenu6, setShowMenu6] = useState(false);
  return (
    <div className={styles.playlist_container}>
      <div className={styles.title}>
        <Image className={styles.image} src={play_back} width={50} height={50} onClick={handleClickBack} />
        <Image className={styles.image} src={play_skip_back} width={50} height={50} onClick={handleClickBefore} />
        <h1>RAP</h1>
        <Image className={styles.image} src={play_skip_forward} width={50} height={50} onClick={handleClickNext} />
        <Image className={styles.image} styles="fill:white" src={play_forward} width={50} height={50} onClick={handleClickFinish} />
      </div>
      <div className={styles.playlist}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <a onClick={() => setShowMenu1(!showMenu1)}>Eminems Greatest Hits</a>
            {(showMenu1) && (
              <div className={styles.dropdown_content}>
                <ol className={styles.list_item_music}>
                  {
                    Array.from({ length: rap.eminem.length  }).map((_, i) => (
                      <li key={i} className={styles.list_item_songs}>
                        <Card name={rap.eminem[i].name} author={rap.eminem[i].author} cover={rap.eminem[i].cover} link={rap.eminem[i].link} key={`item_rap_eminem_${i}`} />
                      </li>
                    ))
                  }

                </ol>
              </div>)}
            </li>
          <li className={styles.list_item}>
          <a onClick={() => setShowMenu2(!showMenu2)}>Hip Hop</a>
              {(showMenu2) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rap.hip_hop.length  }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={rap.hip_hop[i].name} author={rap.hip_hop[i].author} cover={rap.hip_hop[i].cover} link={rap.hip_hop[i].link} key={`item_rap_hip_hops_${i}`} />
                        </li>
                      ))
                    }

                  </ol>
                </div>)}
            </li>
          <li className={styles.list_item}>
          <a onClick={() => setShowMenu3(!showMenu3)}>Workout</a>
              {(showMenu3) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rap.workout.length   }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={ rap.workout[i].name} author={ rap.workout[i].author} cover={ rap.workout[i].cover} link={ rap.workout[i].link} key={`item_rap_workout_${i}`} />
                        </li>
                      ))
                    }

                  </ol>
                </div>)}
            </li>
          <li className={styles.list_item}>
          <a onClick={() => setShowMenu4(!showMenu4)}>90's Greatest</a>
              {(showMenu4) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rap.g90s.length   }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={rap.g90s[i].name} author={rap.g90s[i].author} cover={rap.g90s[i].cover} link={rap.g90s[i].link} key={`item_rap_g90s_${i}`} />
                        </li>
                      ))
                    }

                  </ol>
                </div>)}
            </li>
          <li className={styles.list_item}>
          <a onClick={() => setShowMenu5(!showMenu5)}>G(old) school</a>
              {(showMenu5) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rap.gold.length    }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={rap.gold[i].name} author={rap.gold[i].author} cover={rap.gold[i].cover} link={rap.gold[i].link} key={`item_rap_gold_${i}`} />
                        </li>
                      ))
                    }

                  </ol>
                </div>)}
            </li>
          <li className={styles.list_item}>
          <a onClick={() => setShowMenu6(!showMenu6)}>This is Drake</a>
              {(showMenu6) && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {
                      Array.from({ length: rap.drake.length }).map((_, i) => (
                        <li key={i} className={styles.list_item_songs}>
                          <Card name={rap.drake[i].name} author={rap.drake[i].author} cover={rap.drake[i].cover} link={rap.drake[i].link} key={`item_rap_drake_${i}`} />
                        </li>
                      ))
                    }

                  </ol>
                </div>)}
            </li>
        </ul>
      </div>
    </div>
  );
}
