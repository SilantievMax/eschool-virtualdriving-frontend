import React from "react";
import photoUser1 from '../../../static/images/photoUser1.webp'
import photoUser2 from '../../../static/images/photoUser2.webp'
import photoUser3 from '../../../static/images/photoUser3.webp'
import photoUser4 from '../../../static/images/photoUser4.webp'
import styles from './BannerInstructors.module.css'

const BannerInstructors = () => {
    return (
        <>
        <section className={styles.section}>
            <h3 className={styles.heading}>Инструкторы</h3>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.wrapper_img}>
                        <img src={photoUser1} alt="photoUser" className={styles.photo} />
                    </div>
                    <small className={styles.name_instructor}>Егор Огородников</small>
                    <ul className={styles.list_text}>
                        <li className={styles.item_text}> Обладатель PRO лицензии в iRacing</li>
                        <li className={styles.item_text}> Участник мировых LAN-финалов по Forza Motorsport 7, RaceRoom</li>
                        <li className={styles.item_text}> Многократный призер российских чемпионатов</li>
                    </ul>
                </li>
                <li className={styles.item}>
                    <div className={styles.wrapper_img}>
                        <img src={photoUser2} alt="photoUser" className={styles.photo} />
                    </div>
                    <small className={styles.name_instructor}>Влад Химичев</small>
                    <ul className={styles.list_text}>
                        <li className={styles.item_text}>Обладатель 9000 рейтинга в IRacing</li>
                        <li className={styles.item_text}>Победитель чемпионата Черноземья по картингу 2016-2019</li>
                        <li className={styles.item_text}>Бронзовый призёр чемпионата ORSRL TCR Championship 2019</li>
                        <li className={styles.item_text}>Чемпион ORSRL V8 Championship 2021</li>
                    </ul>
                </li>
                <li className={styles.item}>
                    <div className={styles.wrapper_img}>
                        <img src={photoUser3} alt="photoUser" className={styles.photo} />
                    </div>
                    <small className={styles.name_instructor}>Кирилл Антонов</small>
                    <ul className={styles.list_text}>
                        <li className={styles.item_text}>Чемпион Porsche eSport Championship Russia 2018 и LADA eChampionship 2019</li>
                        <li className={styles.item_text}>Победиль чемпионата ONBOARD | ESPORTS по Gran Turismo Sport</li>
                    </ul>
                </li>
                <li className={styles.item}>
                    <div className={styles.wrapper_img}>
                        <img src={photoUser4} alt="photoUser" className={styles.photo} />
                    </div>
                    <small className={styles.name_instructor}>Максим Петров</small>
                    <ul className={styles.list_text}>
                        <li className={styles.item_text}>Многократный призер любительских турниров</li>
                        <li className={styles.item_text}>Финалист SMP Challenge</li>
                        <li className={styles.item_text}>Победитель чемпионата Sonchyk ASUS Championship </li>
                    </ul>
                </li>
            </ul>
        </section>
        </>
    )
}

export default BannerInstructors;