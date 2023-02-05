import React from "react";
import InfoAboutUser from "components/PersonalClassesPageComponents/InfoAboutCoaches/InfoAboutUser/InfoAboutUser";
import BtnForInfoCoaches from "components/PersonalClassesPageComponents/InfoAboutCoaches/BtnForInfoCoaches/BtnForInfoCoaches";
import FeedbackAboutCoaches from "components/PersonalClassesPageComponents/InfoAboutCoaches/FeedbackAboutCoaches/FeedbackAboutCoaches";
import styles from './InfoAboutCoaches.module.css'

const InfoAboutCoaches = () => {
    return (
        <>
        <section className={styles.section}>
            <h2 className={styles.heading}>Информация о тренерах</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <InfoAboutUser />
                </li>
                <li className={styles.item}>
                    <BtnForInfoCoaches />
                </li>
                <li className={styles.item}>
                    <FeedbackAboutCoaches />
                </li>
            </ul>
        </section>
        </>
    )
}

export default InfoAboutCoaches;