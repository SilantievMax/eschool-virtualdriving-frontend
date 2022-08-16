import React from 'react';
import { Link } from 'react-router-dom';
import './registerForm.css'

const RegisterForm = () => {
    return (
        <>
        <form action="" className="register__form">
            <h3 className="register__heading">Регистрация</h3>
            <input type="text" autocomplete="off" className="register__input" placeholder='Имя и Фамилия*' />
            <input type="text" autocomplete="off" className="register__input" placeholder='E-mail*' />
            <input type="password" autocomplete="off" className="register__input" placeholder='Пароль' />
            <input type="password" autocomplete="off" className="register__input" placeholder='Повторите пароль' />
            <button className="register__btn">Зарегистрироваться</button>
            <Link to="/authorization/login" className="register__login">Войти</Link>
        </form>
        </>
    )
}

export default RegisterForm;