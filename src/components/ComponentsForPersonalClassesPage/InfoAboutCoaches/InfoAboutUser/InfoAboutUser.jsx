import React from "react";
import styles from "./InfoAboutUser.module.css"
import img1 from "../../../../static/images/photoUser1.webp"
import img2 from "../../../../static/images/photoUser2.webp"
import img3 from "../../../../static/images/photoUser3.webp"
import img4 from "../../../../static/images/photoUser4.webp"

const InfoAboutUser = () => {
    return (
        <>
        <ul className={styles.list}>
            <li className={styles.item}>
                <div className={styles.container}>
                    <img src={img1} alt="" className={styles.logo} />
                    <h5 className={styles.heading}>Егор Огородников</h5>
                </div>
                <ul className={styles.list_text}>
                    <li className={styles.item_text}>Обладатель 9000 рейтинга в IRacing</li>
                    <li className={styles.item_text}>Победитель чемпионата Черноземья по картингу 2016-2019</li>
                    <li className={styles.item_text}>Бронзовый призёр чемпионата ORSRL TCR Championship 2019</li>
                    <li className={styles.item_text}>Чемпион ORSRL V8 Championship 2021</li>
                </ul>
                <ul className={styles.list_account}>
                    <li className={styles.item_account1}></li>
                    <li className={styles.item_account2}></li>
                </ul>
            </li>
            <li className={styles.item}>
                <div className={styles.container}>
                    <img src={img2} alt="" className={styles.logo} />
                    <h5 className={styles.heading}>Влад Химичев</h5>
                </div>
                <ul className={styles.list_text}>
                    <li className={styles.item_text}>Обладатель 9000 рейтинга в IRacing</li>
                    <li className={styles.item_text}>Победитель чемпионата Черноземья по картингу 2016-2019</li>
                    <li className={styles.item_text}>Бронзовый призёр чемпионата ORSRL TCR Championship 2019</li>
                    <li className={styles.item_text}>Чемпион ORSRL V8 Championship 2021</li>
                </ul>
                <ul className={styles.list_account}>
                    <li className={styles.item_account1}></li>
                    <li className={styles.item_account2}></li>
                </ul>
            </li>
            <li className={styles.item}>
                <div className={styles.container}>
                    <img src={img3} alt="" className={styles.logo} />
                    <h5 className={styles.heading}>Кирилл Антонов</h5>
                </div>
                <ul className={styles.list_text}>
                    <li className={styles.item_text}>Обладатель 9000 рейтинга в IRacing</li>
                    <li className={styles.item_text}>Победитель чемпионата Черноземья по картингу 2016-2019</li>
                    <li className={styles.item_text}>Бронзовый призёр чемпионата ORSRL TCR Championship 2019</li>
                    <li className={styles.item_text}>Чемпион ORSRL V8 Championship 2021</li>
                </ul>
                <ul className={styles.list_account}>
                    <li className={styles.item_account1}></li>
                    <li className={styles.item_account2}></li>
                </ul>
            </li>
            <li className={styles.item}>
                <div className={styles.container}>
                    <img src={img4} alt="" className={styles.logo} />
                    <h5 className={styles.heading}>Максим Петров</h5>
                </div>
                <ul className={styles.list_text}>
                    <li className={styles.item_text}>Обладатель 9000 рейтинга в IRacing</li>
                    <li className={styles.item_text}>Победитель чемпионата Черноземья по картингу 2016-2019</li>
                    <li className={styles.item_text}>Бронзовый призёр чемпионата ORSRL TCR Championship 2019</li>
                    <li className={styles.item_text}>Чемпион ORSRL V8 Championship 2021</li>
                </ul>
                <ul className={styles.list_account}>
                    <li className={styles.item_account1}></li>
                    <li className={styles.item_account2}></li>
                </ul>
            </li>
        </ul>
        </>
    )
}

export default InfoAboutUser;