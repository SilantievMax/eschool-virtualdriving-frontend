import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './registerForm.css'
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { fetchAuth, selectIsAuth } from "../../redux/features/authSlice";


const RegisterForm = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors, isValid },
    } = useForm({
      defaultValues: {
        fullName: 'Test testov',
        email: "test12334@test.com",
        password: "xxXX1234",
      },
      mode: "onChange",
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values));
        if (!data.payload) {
          return alert("Не удалось авторизоваться!");
        }
        if ("token" in data.payload) {
          window.localStorage.setItem("token", data.payload.token);
        }
      };
    
      if (isAuth) {
        return <Navigate to="/administrator/statistics" />;
      }

    return (
        <>
        <form onSubmit={(e) => e.preventDefault()} action="" onsubmit="return false" className="register__form">
            <h3 className="register__heading">Регистрация</h3>
            <input type="text" autocomplete="off" className="register__input" placeholder='Имя и Фамилия*' />
            <input type="text" autocomplete="off" className="register__input" placeholder='E-mail*' />
            <input type="password" autocomplete="off" className="register__input" placeholder='Пароль' />
            {/* <input type="password" autocomplete="off" className="register__input" placeholder='Повторите пароль'/> */}
            <button type='submit' className="register__btn">Зарегистрироваться</button>
            <Link to="/authorization/login" className="register__login">Войти</Link>
        </form>
        </>
    )
}

export default RegisterForm;