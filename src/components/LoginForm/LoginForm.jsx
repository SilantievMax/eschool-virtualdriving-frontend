import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { fetchAuth, selectIsAuth } from "../../redux/features/authSlice";
import "./loginForm.css";

const LoginForm = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: "superadmin@eschool.com",
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
            <form onSubmit={handleSubmit(onSubmit)} className="login__form">
                <h3 className="login__heading">Авторизация</h3>
                <input
                    type="text"
                    autocomplete="off"
                    className="login__input"
                    placeholder="E-mail*"
                    {...register("email", { required: "Укажите почту" })}
                />
                <input
                    type="password"
                    autocomplete="off"
                    className="login__input"
                    placeholder="Пароль"
                    {...register("password", { required: "Укажите пароль" })}
                />
                <a href="/" className="login__forgot">
                    Забыли пароль?
                </a>
                <div className="login__buttons">
                    <button type="submit" className="login__btn">
                        Войти
                    </button>
                    <div className="login__btn-discord"></div>
                </div>
                <Link
                    to={"/authorization/register"}
                    className="login__register"
                >
                    Регистрация
                </Link>
            </form>
        </>
    );
};

export default LoginForm;
