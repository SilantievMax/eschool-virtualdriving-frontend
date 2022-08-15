import React from 'react';
import card3 from '../../static/images/card3.webp'

const Register = () => {
    return (
        <>
        <section className="register">
            <img src={card3} alt="card3" className="register__images" />
            <form action="" className="register__form">
                <h3 className="register__heading">Регистрация</h3>
                <input type="text" className="register__input" placeholder='Имя и Фамилия*' />
                <input type="text" className="register__input" placeholder='E-mail*' />
                <input type="password" className="register__input" placeholder='Пароль' />
                <input type="password" className="register__input" placeholder='Повторите пароль' />
                <button className="register__btn">Зарегистрироваться</button>
                <a href="/" className="register__register">Войти</a>
            </form>
        </section>
        </>
    )
}

export default Register;