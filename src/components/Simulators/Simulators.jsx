import React from "react";
import simulators1 from '../../static/images/simulators1.webp'
import simulators2 from '../../static/images/simulators2.webp'
import simulators3 from '../../static/images/simulators3.webp'
import './simulators.css'

const Simulators = () => {
    return (
        <>
        <section class="simulators">
            <ul class="simulators__list">
                <li class="simulators__item">
                    <img src={simulators1} alt="" class="simulators__img" />
                </li>
                <li class="simulators__item">
                    <img src={simulators2} alt="" class="simulators__img" />
                </li>
                <li class="simulators__item">
                    <img src={simulators3} alt="" class="simulators__img" />
                </li>
            </ul>
        </section>
        </>
    )
}

export default Simulators;