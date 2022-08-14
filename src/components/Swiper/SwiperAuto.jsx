import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css'
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import './swiper.css';

const SwiperAuto = () => {
    return (
        <>
        <section className="swiper">
            <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{delay: 5000, disableOnInteraction: false,}}
            navigation={true}
            cssMode={true}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            >
                <SwiperSlide>
                    <div className="swiper__slide swiper__slide_bgi1">
                        <div className="swiper__wrapper-card">
                            <h2 className="swiper__heading">Онлайн школа виртуального автоспорта</h2>
                            <p className="swiper__description">Первая онлайн площадка в СНГ, на которой лучшие симрейсеры страны могут помочь улучшить ваш навык виртуального гоночного мастерства</p>
                            <a href="#" className="swiper__btn">ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper__slide swiper__slide_bgi2">
                        <div className="swiper__wrapper-card">
                            <h2 className="swiper__heading">Персональные занятия</h2>
                            <p className="swiper__description">Благодаря тренировке с профессионалом 1 на 1 можно гарантированно улучшить своё время на круге и подготовиться к любому чемпионату</p>
                            <a href="#" className="swiper__btn">ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper__slide swiper__slide_bgi3">
                        <div className="swiper__wrapper-card">
                            <h2 className="swiper__heading">Сетапы, реплеи и телеметрия</h2>
                            <p className="swiper__description">Подготовим настройки машин под любые трассы. Предоставим свои примеры прохождения треков в удобном для анализа формате</p>
                            <a href="#" className="swiper__btn">ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper__slide swiper__slide_bgi4">
                        <div className="swiper__wrapper-card">
                            <h2 className="swiper__heading">Ливреи на заказ</h2>
                            <p className="swiper__description">Подготовим уникальный дизайн машины специально для вас</p>
                            <a href="#" className="swiper__btn">ПОДРОБНЕЕ</a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper> 
        </section>
        </>
    )
}

export default SwiperAuto;