import styles from '@styles/Electro.module.scss';
import Image from 'next/image';
import play_back from '@icons/play-back-outline.svg';
import play_forward from '@icons/play-forward-outline.svg';
import play_skip_back from '@icons/play-skip-back-outline.svg';
import play_skip_forward from '@icons/play-skip-forward-outline.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Card from '@components/card';
import { electro } from 'data.mjs';
import Footer from '@components/Footer';

export default function Electro() {
  const router = useRouter();
  const handleClickNext = (e) => {
    router.push('/rap');
  };

  const handleClickBefore = (e) => {
    router.push('/pop');
  };

  const handleClickBack = (e) => {
    router.push('/');
  };

  const handleClickFinish = (e) => {
    router.push('/contact');
  };

  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);
  const [showMenu5, setShowMenu5] = useState(false);
  const [showMenu6, setShowMenu6] = useState(false);
  const [showMenu7, setShowMenu7] = useState(false);
  return (
    <>
    <div className={styles.playlist_container}>
      <div className={styles.title}>
        <Image
          className={styles.image}
          src={play_back}
          width={40}
          height={40}
          onClick={handleClickBack}
        />
        <Image
          className={styles.image}
          src={play_skip_back}
          width={40}
          height={40}
          onClick={handleClickBefore}
        />
        <h1>ELECTRO</h1>
        <Image
          className={styles.image}
          src={play_skip_forward}
          width={40}
          height={40}
          onClick={handleClickNext}
        />
        <Image
          className={styles.image}
          styles="fill:white"
          src={play_forward}
          width={40}
          height={40}
          onClick={handleClickFinish}
        />
      </div>
      <div className={styles.playlist}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <a onClick={() => setShowMenu1(!showMenu1)}>Workout</a>
            {showMenu1 && (
              <div className={styles.dropdown_content}>
                <ol className={styles.list_item_music}>
                  {Array.from({ length: electro.workout.length }).map((_, i) => (
                    <li key={i} className={styles.list_item_songs}>
                      <Card
                        name={electro.workout[i].name}
                        author={electro.workout[i].author}
                        cover={electro.workout[i].cover}
                        link={electro.workout[i].link}
                        
                        key={`item_electro_workouts_${i}`}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </li>
          <li className={styles.list_item}>
            <a onClick={() => setShowMenu2(!showMenu2)}>Dance</a>
            {showMenu2 && (
              <div className={styles.dropdown_content}>
                <ol className={styles.list_item_music}>
                  {Array.from({ length: electro.dance.length }).map((_, i) => (
                    <li key={i} className={styles.list_item_songs}>
                      <Card
                        name={electro.dance[i].name}
                        author={electro.dance[i].author}
                        cover={electro.dance[i].cover}
                        link={electro.dance[i].link}
                        key={`item_electro_dance_${i}`}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </li>
          <li className={styles.list_item}>
            <a onClick={() => setShowMenu3(!showMenu3)}>HARD</a>
            {showMenu3 && (
              <div className={styles.dropdown_content}>
                <ol className={styles.list_item_music}>
                  {Array.from({ length: electro.hard.length }).map((_, i) => (
                    <li key={i} className={styles.list_item_songs}>
                      <Card
                        name={electro.hard[i].name}
                        author={electro.hard[i].author}
                        cover={electro.hard[i].cover}
                        link={electro.hard[i].link}
                        key={`item_electro_hard_${i}`}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </li>
          <li className={styles.list_item}>
            <a onClick={() => setShowMenu4(!showMenu4)}>Dubstep</a>
            {showMenu4 && (
              <div className={styles.dropdown_content}>
                <ol className={styles.list_item_music}>
                  {Array.from({ length: electro.Dubstep.length }).map((_, i) => (
                    <li key={i} className={styles.list_item_songs}>
                      <Card
                        name={electro.Dubstep[i].name}
                        author={electro.Dubstep[i].author}
                        cover={electro.Dubstep[i].cover}
                        link={electro.Dubstep[i].link}
                        key={`item_electro_dubstep_${i}`}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </li>
          <li className={styles.list_item}>
            <a onClick={() => setShowMenu5(!showMenu5)}>Trance</a>
            {showMenu5 && (
              <div className={styles.dropdown_content}>
                <ol className={styles.list_item_music}>
                  {Array.from({ length: electro.trance.length }).map((_, i) => (
                    <li key={i} className={styles.list_item_songs}>
                      <Card
                        name={electro.trance[i].name}
                        author={electro.trance[i].author}
                        cover={electro.trance[i].cover}
                        link={electro.trance[i].link}
                        key={`item_electro_trance_${i}`}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </li>
          <li className={styles.list_item}>
            <a onClick={() => setShowMenu6(!showMenu6)}>D33P</a>
            {showMenu6 && (
              <div className={styles.dropdown_content}>
                <ol className={styles.list_item_music}>
                  {Array.from({ length: electro.deep.length }).map((_, i) => (
                    <li key={i} className={styles.list_item_songs}>
                      <Card
                        name={electro.deep[i].name}
                        author={electro.deep[i].author}
                        cover={electro.deep[i].cover}
                        link={electro.deep[i].link}
                        key={`item_electro_deep_${i}`}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </li>
          <li className={styles.list_item}>
            <a onClick={() => setShowMenu7(!showMenu7)}>After Party</a>
            {showMenu7 && (
              <div className={styles.dropdown_content}>
                <ol className={styles.list_item_music}>
                  {Array.from({ length: electro.after_party.length }).map((_, i) => (
                    <li key={i} className={styles.list_item_songs}>
                      <Card
                        name={electro.after_party[i].name}
                        author={electro.after_party[i].author}
                        cover={electro.after_party[i].cover}
                        link={electro.after_party[i].link}
                        key={`item_electro_after_party_${i}`}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
    <Footer/>
    
    </>
  );
}
