import React from 'react';
import { Link } from 'react-router-dom';
import './loginForm.css'

const LoginForm = () => {
    return (
        <>
        <form action="" className="login__form">
            <h3 className="login__heading">Авторизация</h3>
            <input type="text" autocomplete="off" className="login__input" placeholder='E-mail*' />
            <input type="password" autocomplete="off" className="login__input" placeholder='Пароль' />
            <a href="/" className="login__forgot">Забыли пароль?</a>
            <div className="login__buttons">
                <button className="login__btn">Войти</button>
                <div className="login__btn-discord"></div>
            </div>
            <Link to={'/authorization/register'} className="login__register">Регистрация</Link>
        </form>
        </>
    )
}

export default LoginForm;