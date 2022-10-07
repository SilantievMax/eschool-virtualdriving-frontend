import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { fetchAuth, fetchRegister, selectIsAuth } from "../../redux/features/authSlice";
import "./registerForm.css";

const RegisterForm = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            fullName: "Test Testov",
            email: "test12334@test.com",
            password: "xxXX1234",
        },
        mode: "onChange",
    });

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values));
        if (!data.payload) {
            return alert("Не удалось зарегистрироваться!");
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
            <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                onsubmit="return false"
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
                <button type="submit" className="register__btn">
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
