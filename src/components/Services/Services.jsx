import React from "react";
import { Link } from 'react-router-dom'
import OrderButton from '../Buttons/OrderButton/OrderButton'
import './services.css'
import card1 from '../../static/images/card1.webp'
import card2 from '../../static/images/card2.webp'
import card3 from '../../static/images/card3.webp'

const Services = () => {
    return (
        <>
        <section class="services">
            <h3 class="services__heading">Услуги</h3>
            <ul class="services__list">
                <Link to={'/custom/lessons'} >
                    <li class="services__item">
                        <img src={card1} alt="img" class="services__images-card" />
                        <h4 class="services__heading-card">Тренировки</h4>
                        <p class="services__description-card">Онлайн тренировка, которая поможет сделать Вас быстрее на любой трассе</p>
                        <div class="services__price-card">1500₽</div>
                        <OrderButton link='/'/>
                    </li>
                </Link>
                <Link to={'/custom/files'} >
                    <li class="services__item">
                        <img src={card2} alt="img" class="services__images-card" />
                        <h4 class="services__heading-card">Сетапы</h4>
                        <p class="services__description-card">Поделимся нашими сетапами или реплеями с телеметрией быстрых кругов</p>
                        <div class="services__price-card">500₽</div>
                        <OrderButton link='/'/>
                    </li>
                </Link>
                <Link to={'/custom/liveries'} >
                    <li class="services__item">
                        <img src={card3} alt="img" class="services__images-card" />
                        <h4 class="services__heading-card">Ливреи</h4>
                        <p class="services__description-card">Создадим с нуля или воспроизведём по примерам дизайн гоночного автомобиля</p>
                        <div class="services__price-card">2000₽</div>
                        <OrderButton link='/'/>
                    </li>
                </Link>
            </ul>
        </section>
        </>
    )
}

export default Services;