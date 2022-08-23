import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './registerForm.css'
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/features/auth/authSlice';

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = () => {
        try {
            dispatch(registerUser({ username, password, email}))
            setUsername('')
            setPassword('')
            setEmail('')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <form onSubmit={(e) => e.preventDefault()} action="" onsubmit="return false" className="register__form">
            <h3 className="register__heading">Регистрация</h3>
            <input type="text" autocomplete="off" className="register__input" placeholder='Имя и Фамилия*' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" autocomplete="off" className="register__input" placeholder='E-mail*' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" autocomplete="off" className="register__input" placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" autocomplete="off" className="register__input" placeholder='Повторите пароль' onClick={handleSubmit}/>
            <button type='submit' className="register__btn">Зарегистрироваться</button>
            <Link to="/authorization/login" className="register__login">Войти</Link>
        </form>
        </>
    )
}

export default RegisterForm;