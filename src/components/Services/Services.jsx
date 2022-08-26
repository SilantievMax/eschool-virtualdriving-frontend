import React from "react";
import { Link } from 'react-router-dom'
import OrderButton from '../Buttons/OrderButton/OrderButton'
import styles from './Services.module.css'
import card1 from '../../static/images/card1.webp'
import card2 from '../../static/images/card2.webp'
import card3 from '../../static/images/card3.webp'

const Services = () => {
    return (
        <>
        <section class={styles.services}>
            <h3 class={styles.heading}>Услуги</h3>
            <ul class={styles.list}>
                <Link to={'/custom/lessons'} title="Подробнее">
                    <li class={styles.item}>
                        <img src={card1} alt="img" class={styles.images_card} />
                        <h4 class={styles.heading_card}>Персональные занятия</h4>
                        <p class={styles.description_card}>Онлайн тренировка, которая поможет сделать Вас быстрее на любой трассе</p>
                        <div class={styles.price_card}>1500₽</div>
                        <OrderButton link='/'/>
                    </li>
                </Link>
                <Link to={'/custom/files'} title="Подробнее">
                    <li class={styles.item}>
                        <img src={card2} alt="img" class={styles.images_card} />
                        <h4 class={styles.heading_card}>Сетапы</h4>
                        <p class={styles.description_card}>Поделимся нашими сетапами или реплеями с телеметрией быстрых кругов</p>
                        <div class={styles.price_card}>500₽</div>
                        <OrderButton link='/'/>
                    </li>
                </Link>
                <Link to={'/custom/liveries'} title="Подробнее">
                    <li class={styles.item}>
                        <img src={card3} alt="img" class={styles.images_card} />
                        <h4 class={styles.heading_card}>Ливреи</h4>
                        <p class={styles.description_card}>Создадим с нуля или воспроизведём по примерам дизайн гоночного автомобиля</p>
                        <div class={styles.price_card}>2000₽</div>
                        <OrderButton link='/'/>
                    </li>
                </Link>
                <Link to={'/custom/files'} title="Подробнее">
                    <li class={styles.item}>
                        <img src={card2} alt="img" class={styles.images_card} />
                        <h4 class={styles.heading_card}>Сетапы</h4>
                        <p class={styles.description_card}>Поделимся нашими сетапами или реплеями с телеметрией быстрых кругов</p>
                        <div class={styles.price_card}>500₽</div>
                        <OrderButton link='/'/>
                    </li>
                </Link>
                <Link to={'/custom/liveries'} title="Подробнее">
                    <li class={styles.item}>
                        <img src={card3} alt="img" class={styles.images_card} />
                        <h4 class={styles.heading_card}>Ливреи</h4>
                        <p class={styles.description_card}>Создадим с нуля или воспроизведём по примерам дизайн гоночного автомобиля</p>
                        <div class={styles.price_card}>2000₽</div>
                        <OrderButton link='/'/>
                    </li>
                </Link>
            </ul>
        </section>
        </>
    )
}

export default Services;