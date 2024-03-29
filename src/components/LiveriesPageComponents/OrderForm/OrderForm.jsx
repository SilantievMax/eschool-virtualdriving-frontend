import file from 'assets/files/Politica_confidence.pdf'
import img1 from 'assets/images/order1.webp'
import AuthorizationModal from 'components/Authorization/AuthorizationModal/AuthorizationModal'
import Popup from 'components/Generic/Popup/Popup'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { selectIsAuth } from 'redux/features/authSlice.js'
import { fetcCars, fetcTracks } from 'redux/features/dataSlice.js'
import axios from 'utils/axios.js'
import PopupSuccess from 'components/Generic/Popup/PopupSuccess'

import styles from './OrderForm.module.css'

const OrderForm = () => {
  const promocodeNew = 'FOTONVDESFEB'
  const [searchParams, setSearchParams] = useSearchParams()
  const isAuth = useSelector(selectIsAuth)
  const [isLoading, setLoading] = React.useState(false)
  const [communications, setCommunications] = React.useState('')
  // const [orderDate, setOrderDate] = React.useState("");
  const [car, setCar] = React.useState('')
  // const [track, setTrack] = React.useState("*решим с тренером");
  // const [experience, setExperience] = React.useState("");
  const [coment, setComent] = React.useState('')
  const [simulator, setSimulator] = React.useState('ACC')
  // const [equipment, setEquipment] = React.useState("");
  const [price, setPrice] = React.useState(2000)
  const [privacyPolicy, setPrivacyPolicy] = React.useState(false)
  const [success, setSuccess] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const [modalBuyActive, setModalBuyActive] = useState(false)
  // const [quantityTrining, setQuantityTrining] = React.useState("1");
  // const [promocode, setPromocode] = React.useState("");
  const [orderId, setOrderId] = useState(null)

  const onSubmit = async () => {
    try {
      setLoading(true)
      if (!privacyPolicy) {
        return toast.error('Вы не ознакомились с политикой конфиденциальности')
      }
      const fields = {
        car,
        communications,
        coment,
        price,
        simulator,
        privacyPolicy
      }

      const { data } = await axios.post('/orders/liveries', fields)

      setOrderId(data.orderNumber)
      if (data) {
        setSuccess(true)
        // toast.success('Заказ создан')
      }
      setCommunications('')
      setSimulator('ACC')
      setCar('*решим с тренером')
      setComent('')
    } catch (err) {
      if (isAuth) {
        console.warn(err.response.data)
        toast.error('Вы заполнили не все поля или сделали больше 3 заказов')
      } else {
        toast.error('Вы не авторизованы!')
      }
    }
  }

  const successPayment = searchParams.get('successPayment')

  return (
    <>
      <ul className={styles.order__list}>
        <li className={styles.orser__item}>
          <label required className={styles.label}>
            Как с вами связаться*:
            <input
              className={styles.input}
              type='text'
              value={communications}
              onChange={e => setCommunications(e.target.value)}
              placeholder='Telegram, WhatsApp, Discord, VK'
            />
          </label>
          <label className={styles.label}>
            Симулятор (где нужна ливрея):
            <select
              className={styles.input}
              value={simulator}
              onChange={e => setSimulator(e.target.value)}
              name='pets'
            >
              <option selected value='ACC'>
                ACC
              </option>
              <option selected value='IRacing'>
                IRacing
              </option>
              <option selected value='достаточно только PSD файла'>
                достаточно только PSD файла
              </option>
              <option selected value='другое'>
                другое
              </option>
            </select>
          </label>
          <label className={styles.label}>
            Введите марку машины:
            <input
              className={styles.input}
              type='text'
              value={car}
              onChange={e => setCar(e.target.value)}
              placeholder='BMW'
            />
          </label>
          <label className={styles.label}>
            Комментарий*:
            <textarea
              type='textarea'
              className={styles.input}
              value={coment}
              onChange={e => setComent(e.target.value)}
              placeholder='Опишите желаемый дизайн, референсы работ и прочие нюансы'
            />
          </label>
        </li>
        <li className={styles.orser__item}>
          <label className={styles.checkbox}>
            <input
              className={styles.checkbox__input}
              defaultChecked={privacyPolicy}
              type='checkbox'
              onChange={() => setPrivacyPolicy(!privacyPolicy)}
            />
            <span>
              Я принимаю условия{' '}
              <a href={file} download='Политика_конфиденциальности'>
                передачи информации
              </a>
            </span>
          </label>
          <small className={styles.warning}>
            Поля с * являются обязательными для создания заявки
          </small>
          <div className={styles.price}>{`${price}₽`} </div>
          {/* <button
            className={styles.btn}
            onClick={() => {
              onSubmit()
              setSuccess(true)
            }}
          >
            Отправить
          </button> */}
          {!isAuth ? (
            <button
              className={styles.btn}
              onClick={() => {
                setModalActive(true)
              }}
            >
              войти и купить
            </button>
          ) : (
            <button
              className={styles.btn}
              onClick={() => {
                setModalBuyActive(true)
                onSubmit()
              }}
            >
              Заказать
            </button>
          )}
        </li>
      </ul>
      {!isAuth && (
        <AuthorizationModal active={modalActive} setActive={setModalActive} />
      )}
      {!success || (
        <Popup
          orderId={orderId}
          order='liveries'
          onClose={() => setSuccess(false)}
        />
      )}
      {isAuth && !!successPayment && !modalBuyActive && (
        <PopupSuccess onClose={() => setSearchParams('')} />
      )}
    </>
  )
}

export default OrderForm
