import styles from '@styles/Card.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import youtube from '@logos/youtube-music.png';
import spotify from '@logos/spotify.png';
import apple from '@logos/apple_music.png';

export default function Card({ name, author, cover, link }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };
  return (
    <>
      <div
        className={styles.card_container}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.card_img}>
          <Image src={cover} width="50" height="50" alt={name} />
        </div>
        <div className={styles.card_text}>
          <div className={styles.card_name}>
            <p>{name}</p>
          </div>
          <div className={styles.card_author}>
            <p>{author}</p>
          </div>
        </div>
      </div>
      {isHovered && (
        <div className={styles.popover}>
          <a href={link[0]} target="_blank" rel="noreferrer">
            <Image src={youtube} width={30} height={30} alt="yt" />
          </a>
          <a href={link[1]} target="_blank" rel="noreferrer">
            <Image src={spotify} width={30} height={30} alt="spotify" />
          </a>
          <a href={link[2]} target="_blank" rel="noreferrer">
            <Image src={apple} width={30} height={30} alt="apple" />
          </a>
        </div>
      )}
    </>
  );
}
