import styles from "@styles/Card.module.scss"
import Image from "next/image";


export default function Card({name, author, cover, link}){
    return(
        <div className={styles.card_container}>
            <div className={styles.card_img}>
                <Image src={cover} width="50" height="50" alt={name} />
            </div>
            <div className={styles.card_text}>
                <div className={styles.card_name}>
                    <p>{name}</p>
                    </div>
                <div className={styles.card_author}><p>{author}</p></div>
            </div>
        </div>
    );
}