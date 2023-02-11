import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { fetchRegister, selectIsAuth } from 'redux/features/authSlice'

import styles from './RegisterForm.module.css'

const RegisterForm = ({ modal }) => {
	const isAuth = useSelector(selectIsAuth)
	const dispatch = useDispatch()

	const refPartnerLink = window.localStorage.getItem('refPartner')

	const {
		register,
		handleSubmit,
		setError, //ошибки с бэкэнда
		formState: { errors, isValid }
	} = useForm({
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			refPartner: refPartnerLink
		},
		mode: 'onChange'
	})

	const onSubmit = async values => {
		dispatch(fetchRegister(values))
	}

	if (isAuth) {
		return <Navigate to='/administrator/statistics' />
	}

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.register__form}>
				<h3 className={styles.register__heading}>Регистрация</h3>
				<input
					type='text'
					autocomplete='off'
					className={styles.register__input}
					placeholder='Имя и Фамилия*'
					{...register('fullName', {
						required: 'Укажите полное имя'
					})}
				/>
				<input
					type='text'
					autocomplete='off'
					className={styles.register__input}
					placeholder='E-mail*'
					{...register('email', { required: 'Укажите email' })}
				/>
				<input
					type='password'
					autocomplete='off'
					className={styles.register__input}
					placeholder='Пароль'
					{...register('password', { required: 'Укажите пароль' })}
				/>
				{/* <input type="password" autocomplete="off" className={styles.register__input" placeholder='Повторите пароль'/> */}
				<button type='submit' className={styles.register__btn}>
					Зарегистрироваться
				</button>
				<spam
					to='/authorization/login'
					className={styles.register__login}
					onClick={() => modal(1)}
				>
					Войти
				</spam>
			</form>
		</>
	)
}

export default RegisterForm
