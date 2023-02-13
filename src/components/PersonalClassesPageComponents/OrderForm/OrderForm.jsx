import file from 'assets/files/Politica_confidence.pdf'
import img1 from 'assets/images/order1.webp'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { selectIsAuth } from 'redux/features/authSlice.js'
import { fetcCars, fetcTracks } from 'redux/features/dataSlice.js'
import axios from 'utils/axios.js'

import styles from './OrderForm.module.css'

const OrderForm = () => {
  const promocodeNew = 'FOTONVDESFEB'

  const isAuth = useSelector(selectIsAuth)
  const [isLoading, setLoading] = React.useState(false)
  const [communications, setCommunications] = React.useState('')
  const [orderDate, setOrderDate] = React.useState('')
  const [car, setCar] = React.useState('*решим с тренером')
  const [track, setTrack] = React.useState('*решим с тренером')
  const [experience, setExperience] = React.useState('')
  const [coment, setComent] = React.useState('')
  const [simulator, setSimulator] = React.useState('ACC')
  const [equipment, setEquipment] = React.useState('')
  const [price, setPrice] = React.useState(1500)
  const [privacyPolicy, setPrivacyPolicy] = React.useState(false)
  const [quantityTrining, setQuantityTrining] = React.useState('1')
  const [promocode, setPromocode] = React.useState('')

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetcCars())
    dispatch(fetcTracks())
  }, [])

  const { cars } = useSelector(state => state.data)
  const { tracks } = useSelector(state => state.data)

  const onSubmit = async () => {
    try {
      setLoading(true)
      if (!privacyPolicy) {
        return toast.error('Вы не ознакомились с политикой конфиденциальности')
      }
      const fields = {
        car,
        track,
        orderDate,
        communications,
        experience,
        coment,
        equipment,
        price,
        simulator,
        privacyPolicy,
        quantityTrining,
        promocode
      }

      const { data } = await axios.post('/orders/training', fields)

      const id = data._id
      if (data) {
        toast.success('Заказ создан')
      }
      setCommunications('')
      setOrderDate('')
      setSimulator('ACC')
      setCar('*решим с тренером')
      setTrack('*решим с тренером')
      setComent('')
      setExperience('')
      setEquipment('')
      setQuantityTrining(1)
      setPromocode('')
    } catch (err) {
      if (isAuth) {
        console.warn(err.response.data)
        toast.error('Вы заполнили не все поля или сделали больше 3 заказов')
      } else {
        toast.error('Вы не авторизованы!')
      }
    }
  }

  const onchangePrice = x => {
    if (promocodeNew === x) {
      switch (quantityTrining) {
        case '1':
          return setPrice(1500 - 1500 * 0.05)
        case '2':
          return setPrice(3000 - 3000 * 0.05)
        case '3':
          return setPrice(4500 - 4500 * 0.05)
        case '4':
          return setPrice(5000 - 5000 * 0.05)
      }
    } else {
      switch (quantityTrining) {
        case '1':
          return setPrice(1500)
        case '2':
          return setPrice(3000)
        case '3':
          return setPrice(4500)
        case '4':
          return setPrice(5000)
      }
    }
  }

  return (
    <>
      <ul className={styles.order__list}>
        <li className={styles.orser__item}>
          <img className={styles.img} src={img1} alt='img1' />
        </li>
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
            Выберите дату тренировки:
            <input
              required
              className={styles.input}
              type='datetime-local'
              value={orderDate}
              onChange={e => setOrderDate(e.target.value)}
              placeholder='orderDate'
            />
          </label>
          <label className={styles.label}>
            Выберите симулятор:
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
            </select>
          </label>
          <label className={styles.label}>
            Выберите автомобиль:
            <select
              className={styles.input}
              value={car}
              onChange={e => setCar(e.target.value)}
              name='pets'
            >
              <option selected value='*решим с трениром'>
                *решим с тренером
              </option>
              {cars.map(({ title }) => (
                <option value={title}>{title}</option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Выберите трассу:
            <select
              className={styles.input}
              value={track}
              onChange={e => setTrack(e.target.value)}
              name='pets'
            >
              <option selected value='*решим с трениром'>
                *решим с тренером
              </option>
              {tracks.map(({ title }) => (
                <option value={title}>{title}</option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Выберите кол-во тренировок:
            <select
              className={styles.input}
              value={quantityTrining}
              onChange={e => {
                setQuantityTrining(e.target.value)
              }}
              onClick={onchangePrice}
              name='pets'
            >
              <option selected value='1'>
                1
              </option>
              <option selected value='2'>
                2
              </option>
              <option selected value='3'>
                3
              </option>
              <option selected value='4'>
                4
              </option>
            </select>
          </label>
          <label className={styles.label}>
            Комментарий:
            <textarea
              type='textarea'
              className={styles.input}
              value={coment}
              onChange={e => setComent(e.target.value)}
              placeholder='комментарий'
            />
          </label>
        </li>
        <li className={styles.orser__item}>
          <label className={styles.label}>
            Расскажите о вашем опыте:
            <textarea
              type='textarea'
              className={styles.input}
              value={experience}
              onChange={e => setExperience(e.target.value)}
              placeholder='Сколько лет в симрейсинге? Какие машины/трассы предпочитаете? Отставание от лидера, участия в чемпионатах...'
            />
          </label>
          <label className={styles.label}>
            Какое оборудование вы используете?:
            <textarea
              type='textarea'
              className={styles.input}
              value={equipment}
              onChange={e => setEquipment(e.target.value)}
              placeholder='Педали, рулевая база, баранка, кокпит...'
            />
          </label>
          {/* <label required className={styles.label}>
            Промокод:
            <input
              className={styles.input}
              type="text"
              value={promocode}
              onChange={(e) => {
                setPromocode(e.target.value);
                onchangePrice(e.target.value);
              }}
            />
          </label> */}
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
          <button className={styles.btn} onClick={onSubmit}>
            Отправить
          </button>
        </li>
      </ul>
    </>
  )
}

export default OrderForm
