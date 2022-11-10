import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { fetchRegister, selectIsAuth } from "../../redux/features/authSlice";
import "./registerForm.css";

const RegisterForm = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        setError, //ошибки с бэкэнда
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        },
        mode: "onChange",
    });

    const onSubmit = async (values) => {
        dispatch(fetchRegister(values));
    };

    if (isAuth) {
        return <Navigate to="/administrator/statistics" />;
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="register__form"
            >
                <h3 className="register__heading">Регистрация</h3>
                <input
                    type="text"
                    autocomplete="off"
                    className="register__input"
                    placeholder="Имя и Фамилия*"
                    {...register("fullName", { required: "Укажите полное имя" })}
                />
                <input
                    type="text"
                    autocomplete="off"
                    className="register__input"
                    placeholder="E-mail*"
                    {...register("email", { required: "Укажите email" })}
                />
                <input
                    type="password"
                    autocomplete="off"
                    className="register__input"
                    placeholder="Пароль"
                    {...register("password", { required: "Укажите пароль" })}
                />
                {/* <input type="password" autocomplete="off" className="register__input" placeholder='Повторите пароль'/> */}
                <button  type="submit" className="register__btn">
                    Зарегистрироваться
                </button>
                <Link to="/authorization/login" className="register__login">
                    Войти
                </Link>
            </form>
        </>
    );
};

export default RegisterForm;
