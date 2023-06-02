import styles from '@styles/Footer.module.scss';
import { useRouter } from 'next/router';
import github from '@logos/logo-github.svg';
import linkedin from '@logos/logo-linkedin.svg';
import instagram from '@logos/logo-instagram.svg';

import Image from 'next/image';
export default function Footer() {
  const router = useRouter();
  return (
    <section className={styles.footer} id="footer">
      <a href="https://dkfox.com.co" target="_blank">
        DK-FOX
      </a>
      <div className={styles.social_media}>
        <div className="linkedin">
          <Image src={linkedin} width={20} height={20} alt="linkedin" />
        </div>
        <div className={styles.instagram}>
          <Image src={instagram} width={20} height={20} alt="linkedin" />
        </div>
        <div className="github">
          <Image src={github} width={20} height={20} alt="linkedin" />
        </div>
      </div>
      <button
        className={styles.button_dk}
        onClick={() => router.push('/')}
        onKeyDown={() => router.push('/')}
      >
        DKF-MUSIC-PL
      </button>
    </section>
  );
}
