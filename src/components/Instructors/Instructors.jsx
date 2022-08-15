import React from "react";
import './instructors.css'
import photoUser1 from '../../static/images/photoUser1.webp'
import photoUser2 from '../../static/images/photoUser2.webp'
import photoUser3 from '../../static/images/photoUser3.webp'
import photoUser4 from '../../static/images/photoUser4.webp'

const Instructors = () => {
    return (
        <>
        <section class="instructors">
            <h3 class="instructors__heading">Инструкторы</h3>
            <ul class="instructors__list">
                <li class="instructors__item">
                    <img src={photoUser1} alt="photoUser" class="instructors__photo" />
                    <small class="instructors__name-instructor">Егор Огородников</small>
                    <ul class="instructors__list2">
                        <li class="instructors__item2"> Обладатель PRO лицензии в iRacing</li>
                        <li class="instructors__item2"> Участник мировых LAN-финалов по Forza Motorsport 7, RaceRoom</li>
                        <li class="instructors__item2"> Многократный призер российских чемпионатов</li>
                    </ul>
                </li>
                <li class="instructors__item">
                    <img src={photoUser2} alt="photoUser" class="instructors__photo" />
                    <small class="instructors__name-instructor">Влад Химичев</small>
                    <ul class="instructors__list2">
                        <li class="instructors__item2">Обладатель 9000 рейтинга в IRacing</li>
                        <li class="instructors__item2">Победитель чемпионата Черноземья по картингу 2016-2019</li>
                        <li class="instructors__item2">Бронзовый призёр чемпионата ORSRL TCR Championship 2019</li>
                        <li class="instructors__item2">Чемпион ORSRL V8 Championship 2021</li>
                    </ul>
                </li>
                <li class="instructors__item">
                    <img src={photoUser3} alt="photoUser" class="instructors__photo" />
                    <small class="instructors__name-instructor">Кирилл Антонов</small>
                    <ul class="instructors__list2">
                        <li class="instructors__item2">Чемпион Porsche eSport Championship Russia 2018 и LADA eChampionship 2019</li>
                        <li class="instructors__item2">Победиль чемпионата ONBOARD | ESPORTS по Gran Turismo Sport</li>
                    </ul>
                </li>
                <li class="instructors__item">
                    <img src={photoUser4} alt="photoUser" class="instructors__photo" />
                    <small class="instructors__name-instructor">Максим Петров</small>
                    <ul class="instructors__list2">
                        <li class="instructors__item2">Многократный призер любительских турниров</li>
                        <li class="instructors__item2">Финалист SMP Challenge</li>
                        <li class="instructors__item2">Победитель чемпионата Sonchyk ASUS Championship </li>
                    </ul>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Instructors;