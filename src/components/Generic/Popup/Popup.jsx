import React from 'react'
import axios from '../../../utils/axios.js'

const Popup = ({ onClose, orderId, order }) => {
  const handlePayClick = async () => {
    const { data } = await axios.post(`/orders/${order}/${orderId}/payment`, {
      successUrl: `${window.location.href}?successPayment=${orderId}`
    })

    if (data.redirectUrl) {
      window.location.href = data.redirectUrl
      return
    }
  }

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center'>
        <div
          className='rounded-lg p-8 w-full max-w-xl bg-gray-100'
          onClick={e => e.stopPropagation()}
        >
          <h2 className='text-2xl font-bold font-sans mb-8'>
            Спасибо за вашу заявку!
          </h2>
          <div className='text-lg font-sans mb-8'>
            <p>
              "В ближайшее время мы свяжемся с вами! <br />
              Также вы можете сразу оплатить заказ."
            </p>
          </div>
          <div className='flex justify-between'>
            <button
              type='button'
              className='bg-brand hover:bg-brand/80 py-2.5 px-10 text-lg text-white transition-colors'
              onClick={handlePayClick}
            >
              Оплатить
            </button>
            <button
              type='button'
              className='bg-gray-900 hover:bg-gray-900/80 py-2.5 px-10 text-lg text-white transition-colors ml-5'
              onClick={onClose}
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popup
