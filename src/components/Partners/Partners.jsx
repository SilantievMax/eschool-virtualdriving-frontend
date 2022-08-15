import React from "react";
import partners1 from '../../static/images/partners1.webp'
import partners2 from '../../static/images/partners2.webp'
import './partners.css'

const Partners = () => {
    return (
        <>
        <section class="partners">
            <h3 class="partners__heading">Наши партнеры</h3>
            <ul class="partners__list">
                <li class="partners__item">
                    <img src={partners1} alt="partners" class="partners__img partners__img_1" />
                </li>
                <li class="partners__item">
                    <img src={partners2} alt="partners" class="partners__img partners__img_2" />
                </li>
            </ul>
        </section>
        </>
    )
}

export default Partners;