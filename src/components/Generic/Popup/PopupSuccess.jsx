import React from 'react'

const Popup = ({ onClose }) => {
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center'>
        <div
          className='rounded-lg p-8 w-full max-w-xl bg-gray-100'
          onClick={e => e.stopPropagation()}
        >
          <h2 className='text-2xl font-bold font-sans mb-8'>
            Ваш заказ оплачен
          </h2>
          <div className='text-lg font-sans mb-8'>
            <p>
              Спасибо за вашу заявку!
              <br />В ближайшее время мы свяжемся с вами!
            </p>
          </div>
          <div className='flex justify-between'>
            <button
              type='button'
              className='bg-brand hover:bg-brand/80 py-2.5 px-10 text-lg text-white transition-colors'
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
