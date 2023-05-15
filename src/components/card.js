import styles from "@styles/Card.module.scss"
import Image from "next/image";


export default function Card(){
    return(
        <div className={styles.card_container}>
            <div className={styles.card_img}>
                <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Steve_Lacy_-_Bad_Habit.png/220px-Steve_Lacy_-_Bad_Habit.png" width="50" height="50" alt="Bad Habit" />
            </div>
            <div className={styles.card_text}>
                <div className={styles.card_name}>
                    <p>Bad Habit</p>
                    </div>
                <div className={styles.card_author}><p>Steve Lacy</p></div>
            </div>
        </div>
    );
}