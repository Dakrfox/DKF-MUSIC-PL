import styles from "@styles/Footer.module.scss";

export default function Footer() {
    return (
        <section className={styles.footer} id="footer">
            <p>DK-FOX</p>
            <div className="social_media">
                <div className="linkedin"></div>
                <div className="instagram"></div>
                <div className="github"></div>
            </div>
            <p>DKF-MUSIC-PL</p>
        </section>
    );
}