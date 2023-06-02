import Image from 'next/image';
import github from '@logos/logo-github.svg';
import instagram from '@logos/logo-instagram.svg';
import linkedin from '@logos/logo-linkedin.svg';
import logo from '@logos/logo.png';
import mail from '@icons/mail.svg';
import eye_sym from '@icons/eye_sym.png';
import styles from '@styles/contact.module.scss';
export default function contact() {
  return (
    <div className={styles.card_presentation_layout}>
      <div className={styles.card_presentation}>
        <Image alt="img_logo" className={styles.logo_img} src={logo} width={150} height={150} />
        <h3 className={styles.text_m}>Nicolas Martinez Herrera</h3>
        <h4 className={styles.text_s}>Fullstack developer</h4>
        <h4 className={styles.text_ss}>
          site:{' '}
          <a href="https://dkfox.com.co" target="_blank" rel="noreferrer">
            {' '}
            dkfox.com.co
          </a>
        </h4>
        <h4 className={styles.text_a}>23 years old</h4>
        <ul className={styles.social_media}>
          <li>
            <Image alt="img_github" src={github} width={20} height={20} />
            <a href="https://github.com/dakrfox" target="_blank" rel="noreferrer">
              @dakrfox
            </a>
          </li>
          <li>
            <Image alt="img_instagram" src={instagram} width={20} height={20} />
            <a href="https://instagram.com/_dkfox" target="_blank" rel="noreferrer">
              @_dkfox
            </a>
          </li>
          <li>
            <Image alt="img_linkedin" src={linkedin} width={20} height={20} />
            <a href="https://linkedin.com/in/dk-fox" target="_blank" rel="noreferrer">
              @dk-fox
            </a>
          </li>
        </ul>
        <div className={styles.image_container}>
          <a href="mailto:business.nimh@outlook.com">
            <Image
              alt="img_mailing"
              className={styles.mail_img}
              src={mail}
              width={40}
              height={40}
            />
          </a>
        </div>
        <div className={styles.image_container}>
          <Image
            alt="img_eye_sym"
            className={styles.eye_sym}
            src={eye_sym}
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
