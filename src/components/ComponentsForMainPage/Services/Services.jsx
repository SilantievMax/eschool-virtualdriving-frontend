import React from "react";
import { Link } from 'react-router-dom'
import OrderButton from '../../Buttons/OrderButton/OrderButton'
import styles from './Services.module.css'
import card1 from '../../../assets/images/card1.webp'
import card2 from '../../../assets/images/card2.webp'
import card3 from '../../../assets/images/card3.webp'

const Services = () => {
    return (
        <>
        <section className={styles.services}>
            <h3 className={styles.heading}>Услуги</h3>
            <ul className={styles.list}>
                <Link to={'/services/personal-classes'} title="Подробнее">
                    <li className={styles.item}>
                        <img src={card1} alt="img" className={styles.images_card} />
                        <h4 className={styles.heading_card}>Персональные занятия</h4>
                        <p className={styles.description_card}>Онлайн тренировка, которая поможет сделать Вас быстрее на любой трассе</p>
                        <div className={styles.price_card}>1500₽</div>
                        <OrderButton link='/'/>
                    </li>
                </Link>
                <Link to={'/services/custom-car'} title="Подробнее">
                    <li className={styles.item}>
                        <img src={card2} alt="img" className={styles.images_card} />
                        <h4 className={styles.heading_card}>Сетапы</h4>
                        <p className={styles.description_card}>Поделимся нашими сетапами или реплеями с телеметрией быстрых кругов</p>
                        <div className={styles.price_card}>500₽</div>
                        <OrderButton link='/'/>
                    </li>
                </Link>
                <Link to={'/services/liveries'} title="Подробнее">
                    <li className={styles.item}>
                        <img src={card3} alt="img" className={styles.images_card} />
                        <h4 className={styles.heading_card}>Ливреи</h4>
                        <p className={styles.description_card}>Создадим с нуля или воспроизведём по примерам дизайн гоночного автомобиля</p>
                        <div className={styles.price_card}>2000₽</div>
                        <OrderButton link='/'/>
                    </li>
                </Link>
            </ul>
        </section>
        </>
    )
}

export default Services;