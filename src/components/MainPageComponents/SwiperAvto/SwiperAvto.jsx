import slider1 from 'assets/images/slider1.webp'
import slider2 from 'assets/images/slider2.webp'
import slider3 from 'assets/images/slider3.webp'
import slider4 from 'assets/images/slider4.webp'
import React from 'react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'

import './SwiperAvto.css'
import styles from './SwiperAvto.module.css'

const SwiperAvto = () => {
  return (
    <>
      <section className={styles.swiper}>
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          navigation={true}
          cssMode={true}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div
              className={`${styles.slide}`}
              style={{ backgroundImage: `url(${slider1})` }}
            >
              <div className={styles.wrapper}>
                <h2 className={styles.heading}>
                  virtual <br />
                  driving <span>e-school</span>
                </h2>
                <p className={styles.description}>
                  Это место где Вы можете научиться быстрой езде и подготовиться
                  к любому заезду. Наши тренеры готовы предложить широкий спект
                  услуг в удобной Вам форме.
                </p>
              </div>
            </div>
            {/* <div className={`${styles.slide} ${styles.slide_bgi1}`}>
              <div className={styles.wrapper}>
                <h2 className={styles.heading}>Онлайн школа виртуального автоспорта</h2>
                <p className={styles.description}>
                  Первая онлайн площадка в СНГ, на которой лучшие симрейсеры страны могут помочь улучшить ваш навык виртуального гоночного мастерства
                </p>
              </div>
            </div> */}
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.slide} }`}
              style={{ backgroundImage: `url(${slider2})` }}
            >
              <div className={styles.wrapper}>
                <h2 className={styles.heading}>
                  Персональные <br /> занятия
                </h2>
                <p className={styles.description}>
                  Благодаря тренировке с профессионалом 1 на 1 можно
                  гарантированно улучшить своё время на круге и подготовиться к
                  любому чемпионату
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.slide} }`}
              style={{ backgroundImage: `url(${slider3})` }}
            >
              <div className={styles.wrapper}>
                <h2 className={styles.heading}>
                  Сетапы, реплеи
                  <br /> и телеметрия
                </h2>
                <p className={styles.description}>
                  Подготовим настройки машин под любые трассы. Предоставим свои
                  примеры прохождения треков в удобном для анализа формате
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.slide} }`}
              style={{ backgroundImage: `url(${slider4})` }}
            >
              <div className={styles.wrapper}>
                <h2 className={styles.heading}>
                  Ливреи
                  <br /> на заказ
                </h2>
                <p className={styles.description}>
                  Персональный дизайн для вашего автомобиля позволит выразить
                  свою уникальность и обратит внимание на всех ваших спонсоров
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default SwiperAvto
