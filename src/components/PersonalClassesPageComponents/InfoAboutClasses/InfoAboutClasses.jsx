import React from "react";
import svg1 from '../../../assets/svg/play.svg';
import svg2 from '../../../assets/svg/magnifier.svg';
import svg3 from '../../../assets/svg/pen.svg';
import image1 from '../../../assets/images/services1.webp';
import styles from './InfoAboutClasses.module.css';

const InfoAboutClasses = () => {
    return (
        <>
        <section className={styles.section}>
            <h2 className={styles.heading}>Как проходят занятия?</h2>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <img src={svg1} alt="svg" className={styles.img_svg} />
                        <p className={styles.description}>Перед занятием вы записываете свой реплей с телеметрией и отправляете все тренеру. Инструкция по записи телеметрии в REC находится ниже.</p>
                    </li>
                    <li className={styles.item}>
                        <img src={svg2} alt="svg" className={styles.img_svg} />
                        <p className={styles.description}>Затем он сравнит эти данные со своими, чтобы начать занятие с разбора ошибок. После теоретической части следует практическая, на которой тренер будет вас корректировать.</p>
                    </li>
                    <li className={styles.item}>
                        <img src={svg3} alt="svg" className={styles.img_svg} />
                        <p className={styles.description}>Ошибки каждого индивидуальны и зачастую очень сложно самостоятельно их выявить. Во время занятия инструктор укажет на все недочеты и объяснит как над ними работать, чтобы повысить уровень пилотажа.</p>
                    </li>
                </ul>
                <img src={image1} alt="" className={styles.images} />
            </div>
        </section>
        </>
    )
}

export default InfoAboutClasses;