import React from 'react';
import card3 from '../../static/images/card3.webp'

const Login = () => {
    return (
        <>
        <section className="login">
            <img src={card3} alt="card3" className="login__images" />
            <form action="" className="login__form">
                <h3 className="login__heading">Авторизация</h3>
                <input type="text" className="login__input" placeholder='E-mail*' />
                <input type="password" className="login__input" placeholder='Пароль' />
                <a href="/" className="login__forgot">Забыли пароль?</a>
                <div className="login__buttons">
                    <button className="login__btn">Войти</button>
                    <button className="login__btn-discord"></button>
                </div>
                <a href="/" className="login__register">Регистрация</a>
            </form>
        </section>
        </>
    )
}

export default Login;