import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import DetailedButton from '../Buttons/DetailedButton/DetailedButton'
import 'swiper/css'
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import styles from './Swiper.module.css';

const SwiperAvto = () => {
    return (
        <>
        <section className={styles.swiper}>
            <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{delay: 6000, disableOnInteraction: true,}}
            navigation={true}
            cssMode={true}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            >
                <SwiperSlide>
                    <div className={`${styles.slide} ${styles.slide_bgi1}`}>
                        <div className={styles.wrapper}>
                            <h2 className={styles.heading}>Онлайн школа виртуального автоспорта</h2>
                            <p className={styles.description}>Первая онлайн площадка в СНГ, на которой лучшие симрейсеры страны могут помочь улучшить ваш навык виртуального гоночного мастерства</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide} ${styles.slide_bgi2}`}>
                        <div className={styles.wrapper}>
                            <h2 className={styles.heading}>Персональные занятия</h2>
                            <p className={styles.description}>Благодаря тренировке с профессионалом 1 на 1 можно гарантированно улучшить своё время на круге и подготовиться к любому чемпионату</p>
                            <DetailedButton link='/custom/lessons' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide} ${styles.slide_bgi3}`}>
                        <div className={styles.wrapper}>
                            <h2 className={styles.heading}>Сетапы, реплеи и телеметрия</h2>
                            <p className={styles.description}>Подготовим настройки машин под любые трассы. Предоставим свои примеры прохождения треков в удобном для анализа формате</p>
                            <DetailedButton link='/custom/files' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${styles.slide} ${styles.slide_bgi4}`}>
                        <div className={styles.wrapper}>
                            <h2 className={styles.heading}>Ливреи на заказ</h2>
                            <p className={styles.description}>Персональный дизайн для вашего автомобиля позволит выразить свою уникальность и обратит внимание на всех ваших спонсоров</p>
                            <DetailedButton link='/custom/liveries' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper> 
        </section>
        </>
    )
}

export default SwiperAvto;