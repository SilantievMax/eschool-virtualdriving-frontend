import Popup from 'components/Generic/Popup/Popup'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import file from '../../../assets/files/Politica_confidence.pdf'
import axios from '../../../utils/axios.js'
import styles from '../../PersonalClassesPageComponents/OrderForm/OrderForm.module.css'

import { formatPrice } from './utils'

export const SetupOrderModal = ({ onClose }) => {
  const { setup } = useSelector(state => state.data)
  const [communications, setCommunications] = useState('')
  const [coupon, setCoupon] = useState('')
  const [coment, setComent] = useState('')
  const [privacyPolicy, setPrivacyPolicy] = useState(true)

  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async event => {
    event.preventDefault()

    try {
      setLoading(true)
      setError('')

      await axios.post(`/orders/setup/${setup.id}`, {
        communications, 
        coupon,
        coment
      })

      setSuccess(true)
      setLoading(false)
      setCommunications('')
      setCoupon('')
      setComent('')
    } catch (error) {
      console.log(error)
      setSuccess(false)
      setLoading(false)
      setError('Произошла ошибка, попробуйте позже')
    }
  }

  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center'
      onClick={() => (!loading ? onClose() : null)}
    >
      <div
        className='rounded-lg p-8 w-full max-w-xl bg-gray-100'
        onClick={e => e.stopPropagation()}
      >
        {!success ? (
          <form onSubmit={onSubmit}>
            <h2 className='text-2xl font-bold font-sans mb-8'>
              Вы хотите преобрести&nbsp;
              <span className='text-brand'>{setup.name}</span>
            </h2>

            <div className='text-2xl font-sans font-semibold mb-8'>
              Сумма к оплате: {formatPrice(setup.price)}
            </div>

            <label className='block cursor-pointer mb-6'>
              <span className='block mb-2 text-gray-600 font-sans font-semibold text-sm uppercase'>
                Как с вами связаться<span className='text-red-600'>*</span>:
              </span>
              <input
                className='w-full h-10 px-4 border-2'
                type='text'
                placeholder='Телефон, Telegram, WhatsApp, Discord, VK'
                value={communications}
                onChange={e => setCommunications(e.target.value)}
                required
              />
            </label>

            {/* <label className='block cursor-pointer mb-6'>
              <span className='block mb-2 text-gray-600 font-sans font-semibold text-sm uppercase'>
                Купон (если есть):
              </span>
              <input
                className='w-full h-10 px-4 border-2'
                type='text'
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
              />
            </label> */}

            <label className='block cursor-pointer mb-6'>
              <span className='block mb-2 text-gray-600 font-sans font-semibold text-sm uppercase'>
                Комментарий:
              </span>
              <input
                className='w-full h-10 px-4 border-2'
                type='text'
                value={coment}
                onChange={e => setComent(e.target.value)}
              />
            </label>

            <label className={`${styles.checkbox} block cursor-pointer mb-6`}>
              <input
                className={styles.checkbox__input}
                defaultChecked={privacyPolicy}
                type='checkbox'
                onChange={() => setPrivacyPolicy(!privacyPolicy)}
                disabled={loading}
              />
              <span>
                Я принимаю условия{' '}
                <a href={file} download='Политика_конфиденциальности'>
                  передачи информации
                </a>
              </span>
            </label>

            <div className='flex justify-between space-x-4'>
              <button
                type='submit'
                disabled={!privacyPolicy || loading}
                className='inline-flex items-center bg-brand hover:bg-brand/80 py-2.5 px-10 text-lg text-white disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors'
              >
                {loading && (
                  <svg
                    className='animate-spin -ml-5 mr-4 h-5 w-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx={12}
                      cy={12}
                      r={10}
                      stroke='currentColor'
                      strokeWidth={4}
                    />
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    />
                  </svg>
                )}
                <span>Подтвердить</span>
              </button>
              <button
                type='button'
                disabled={loading}
                className='border-2 py-2.5 px-10 text-lg text-gray-800 hover:bg-gray-200 hover:border-gray-300 transition-colors'
                onClick={onClose}
              >
                Отменить
              </button>
            </div>
          </form>
        ) : (
          <Popup onClose={onClose} />
        )}
        {error && <div className='text-red-600 mt-4'>{error}</div>}
      </div>
    </div>
  )
}
