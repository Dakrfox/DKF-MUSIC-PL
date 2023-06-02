import styles from '@styles/Pop.module.scss';
import Image from 'next/image';
import play_back from '@icons/play-back-outline.svg';
import play_forward from '@icons/play-forward-outline.svg';
import play_skip_back from '@icons/play-skip-back-outline.svg';
import play_skip_forward from '@icons/play-skip-forward-outline.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { pop } from 'data.mjs';
import Card from '@components/card';
import Footer from '@components/Footer';

export default function Pop() {
  const router = useRouter();
  const handleClickNext = () => {
    router.push('/electro');
  };

  const handleClickBefore = () => {
    router.push('/rock');
  };

  const handleClickBack = () => {
    router.push('/');
  };

  const handleClickFinish = () => {
    router.push('/contact');
  };

  const [showMenu1, setShowMenu1] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu3, setShowMenu3] = useState(false);
  const [showMenu4, setShowMenu4] = useState(false);
  const [showMenu6, setShowMenu6] = useState(false);

  return (
    <>
      <div className={styles.playlist_container}>
        <div className={styles.title}>
          <Image
            alt="img_pb"
            className={styles.image}
            src={play_back}
            width={50}
            height={50}
            onClick={handleClickBack}
          />
          <Image
            alt="img_sb"
            className={styles.image}
            src={play_skip_back}
            width={50}
            height={50}
            onClick={handleClickBefore}
          />
          <h1>POP</h1>
          <Image
            alt="img_sf"
            className={styles.image}
            src={play_skip_forward}
            width={50}
            height={50}
            onClick={handleClickNext}
          />
          <Image
            alt="img_f"
            className={styles.image}
            styles="fill:white"
            src={play_forward}
            width={50}
            height={50}
            onClick={handleClickFinish}
          />
        </div>
        <div className={styles.playlist}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <button
                onKeyDown={() => setShowMenu1(!showMenu1)}
                onClick={() => setShowMenu1(!showMenu1)}
              >
                This is Taylor Swift
              </button>
              {showMenu1 && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {Array.from({ length: pop.taylor_swift.length }).map((_, i) => (
                      <li key={i} className={styles.list_item_songs}>
                        <Card
                          name={pop.taylor_swift[i].name}
                          author={pop.taylor_swift[i].author}
                          cover={pop.taylor_swift[i].cover}
                          link={pop.taylor_swift[i].link}
                          key={`item_taylor_swift_${i}`}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </li>
            <li className={styles.list_item}>
              <button
                onKeyDown={() => setShowMenu2(!showMenu2)}
                onClick={() => setShowMenu2(!showMenu2)}
              >
                KPOP
              </button>
              {showMenu2 && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {Array.from({ length: pop.kpop.length }).map((_, i) => (
                      <li key={i} className={styles.list_item_songs}>
                        <Card
                          name={pop.kpop[i].name}
                          author={pop.kpop[i].author}
                          cover={pop.kpop[i].cover}
                          link={pop.kpop[i].link}
                          key={`item_kpop_${i}`}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </li>
            <li className={styles.list_item}>
              <button
                onKeyDown={() => setShowMenu3(!showMenu3)}
                onClick={() => setShowMenu3(!showMenu3)}
              >
                Girls power
              </button>
              {showMenu3 && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {Array.from({ length: pop.girls_power.length }).map((_, i) => (
                      <li key={i} className={styles.list_item_songs}>
                        <Card
                          name={pop.girls_power[i].name}
                          author={pop.girls_power[i].author}
                          cover={pop.girls_power[i].cover}
                          link={pop.girls_power[i].link}
                          key={`item_girls_power_${i}`}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </li>
            <li className={styles.list_item}>
              <button
                onKeyDown={() => setShowMenu4(!showMenu4)}
                onClick={() => setShowMenu4(!showMenu4)}
              >
                Dance Pop
              </button>
              {showMenu4 && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {Array.from({ length: pop.dance.length }).map((_, i) => (
                      <li key={i} className={styles.list_item_songs}>
                        <Card
                          name={pop.dance[i].name}
                          author={pop.dance[i].author}
                          cover={pop.dance[i].cover}
                          link={pop.dance[i].link}
                          key={`item_dance_${i}`}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </li>
            <li className={styles.list_item}>
              <button
                onKeyDown={() => setShowMenu6(!showMenu6)}
                onClick={() => setShowMenu6(!showMenu6)}
              >
                2000&apos;s Hits
              </button>
              {showMenu6 && (
                <div className={styles.dropdown_content}>
                  <ol className={styles.list_item_music}>
                    {Array.from({ length: pop.g00s.length }).map((_, i) => (
                      <li key={i} className={styles.list_item_songs}>
                        <Card
                          name={pop.g00s[i].name}
                          author={pop.g00s[i].author}
                          cover={pop.g00s[i].cover}
                          link={pop.g00s[i].link}
                          key={`item_g00s_${i}`}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </li>
            <li className={styles.list_item}></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
