import React from "react";
import partners1 from '../../../static/images/partners1.webp'
import partners2 from '../../../static/images/partners2.webp'
import styles from './BannerPartners.module.css'

const BannerPartners = () => {
    return (
        <>
        <section className={styles.section}>
            <h3 className={styles.heading}>Наши партнеры</h3>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <img src={partners1} alt="partners" className={`${styles.img} ${styles.img_1}`} />
                </li>
                <li className={styles.item}>
                    <img src={partners2} alt="partners" className={`${styles.img} ${styles.img_2}`} />
                </li>
            </ul>
        </section>
        </>
    )
}

export default BannerPartners;