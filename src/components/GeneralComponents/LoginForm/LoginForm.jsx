import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchLogin, selectIsAuth } from "redux/features/authSlice";
import styles from "./LoginForm.module.css";
import { toast } from "react-toastify";

const LoginForm = ({ modal }) => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    dispatch(fetchLogin(values));
  };

  if (isAuth) {
    return <Navigate to="/administrator/statistics" />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.login__form}>
        <h3 className={styles.login__heading}>Авторизация</h3>
        <input type="text" autocomplete="off" className={styles.login__input} placeholder="E-mail*" {...register("email", { required: "Укажите почту" })} />
        <input
          type="password"
          autocomplete="off"
          className={styles.login__input}
          placeholder="Пароль"
          {...register("password", { required: "Укажите пароль" })}
        />
        {/* <a href="/" className={styles.login__forgot}>
          Забыли пароль?
        </a> */}
        <div className={styles.login__buttons}>
          <div className={styles.login__btn_discord}></div>
        </div>
        <button type="submit" className={styles.login__btn}>
          Войти
        </button>
        <span to={"/authorization/register"} className={styles.login__register} onClick={() => modal(2)}>
          Регистрация
        </span>
      </form>
    </>
  );
};

export default LoginForm;
