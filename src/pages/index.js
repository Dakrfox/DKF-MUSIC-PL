import styles from "@styles/Home.module.scss"
import flame from "@icons/flame.svg"
import moon from "@icons/moon.svg"
import prism from "@icons/prism.svg"
import nuclear from "@icons/nuclear.svg"
import Image from "next/image"


export default function Home() {
  return (

    <div className={styles.wrapper}>
      <section id="hero" className={styles.hero_container}>
        <div className={styles.rock_container} >
          <div className={styles.content}>
            <div className={styles.icon}>
              <Image src={nuclear} alt="flame" />
            </div>
            <div className={styles.text}>
              <h1>ROCK</h1>
            </div>
          </div>
        </div>
        <div className={styles.pop_container}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <Image src={moon} alt="flame" />
            </div>
            <div className={styles.text}>
              <h1>POP</h1>
            </div>
          </div>
        </div>
        <div className={styles.electro_container}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <Image src={prism} alt="flame" />
            </div>
            <div className={styles.text}>
              <h1>ELECTRO</h1>
            </div>
          </div>
        </div>
        <div className={styles.rap_container}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <Image src={flame} alt="flame" />
            </div>
            <div className={styles.text}>
              <h1>RAP</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about} id="about">
        <div className={`${styles}[about-it]`}>
          <div className={styles.title}>
            <h1>About DKF-MUSIC-PL</h1>
          </div>
          <div className={styles.main_text}>
            <p className={styles.p_text}>Welcome to our web music platform, an application designed to offer a music discovery experience
              through a wide selection of playlists of rock, pop, electro and rap.</p>
          </div>
          <div className={styles.column_container}>
            <div className={styles.left}>
              Our app does not contain music itself, but it is a space where users can browse through a wide
              variety of playlists and discover new songs and artists. From current trends to classics from
              the 80s and beyond, our application offers a wide range of playlist categories to satisfy the
              tastes of all users.</div>
            <div className={styles.center}>Our user interface has been carefully designed to be attractive, modern, and
              easy to use. Users can easily navigate through the different playlist categories, sort them by
              genre, artist, popularity, and other criteria, and view the tracks and corresponding artist
              information.</div>
            <div className={styles.right}>Through our application, we aim to offer an exciting and rewarding music
              discovery experience for all music lovers. Welcome to our music platform, and we hope you enjoy
              browsing and discovering new songs and artists through our application.</div>
          </div>
        </div>
      </section>
      <section className={styles.footer} id="footer">
        <p>DK-FOX</p>
        <div className="social_media">
          <div className="linkedin"></div>
          <div className="instagram"></div>
          <div className="github"></div>
        </div>
        <p>DKF-MUSIC-PL</p>
      </section>
    </div>

  );
}
