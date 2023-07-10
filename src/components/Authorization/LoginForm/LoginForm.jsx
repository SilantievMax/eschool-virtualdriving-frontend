import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchLogin, selectIsAuth } from 'redux/features/authSlice'

import styles from './LoginForm.module.css'

const LoginForm = ({ modal }) => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const { serverStatus } = useSelector(state => state.auth)

  useEffect(() => {
    if (typeof serverStatus == 'string') {
      toast.error(serverStatus)
    } else if (serverStatus != null) {
      serverStatus.map(status => {
        toast.error(status.msg)
      })
    }
    console.log(serverStatus)
  }, [serverStatus])

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  })

  const onSubmit = async values => {
    dispatch(fetchLogin(values))
  }

  if (isAuth) {
    return <Navigate to='/administrator/statistics' />
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.login__form}>
        <h3 className={styles.login__heading}>Авторизация</h3>
        <input
          type='text'
          autocomplete='off'
          className={styles.login__input}
          placeholder='E-mail*'
          {...register('email', { required: 'Укажите почту' })}
        />
        <input
          type='password'
          autocomplete='off'
          className={styles.login__input}
          placeholder='Пароль'
          {...register('password', { required: 'Укажите пароль' })}
        />
        {/* <a href="/" className={styles.login__forgot}>
          Забыли пароль?
        </a> */}
        <div className={styles.login__buttons}>
          <div className={styles.login__btn_discord}></div>
        </div>
        <button type='submit' className={styles.login__btn}>
          Войти
        </button>
        <span
          to={'/authorization/register'}
          className={styles.login__register}
          onClick={() => modal(2)}
        >
          Регистрация
        </span>
      </form>
    </>
  )
}

export default LoginForm
