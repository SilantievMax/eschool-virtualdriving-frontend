import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const OrdersBtn = () => {
  const [active, setActive] = useState(true)

  const openMenu = () => {
    setActive(active => !active)
  }
  return (
    <>
      <button
        type='button'
        onClick={openMenu}
        className='flex items-center p-2 w-full text-base font-medium text-gray-700 duration-75 group hover:bg-slate-700 rounded-xl hover:text-gray-100'
        aria-controls='dropdown-example'
        data-collapse-toggle='dropdown-example'
      >
        <svg
          aria-hidden='true'
          className='w-6 h-6 duration-75'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
            clip-rule='evenodd'
          ></path>
        </svg>
        <span
          className='flex-1 ml-3 text-left whitespace-nowrap'
          sidebar-toggle-item
        >
          Заказы
        </span>
        <svg
          sidebar-toggle-item
          className='w-6 h-6 '
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clip-rule='evenodd'
          ></path>
        </svg>
      </button>
      <ul
        id='dropdown-example'
        className={`${active && 'hidden'} py-2 space-y-2`}
      >
        <Link
          to='training'
          className='flex items-center px-2 py-3 text-base font-medium text-gray-700 hover:bg-slate-700 rounded-xl hover:text-gray-100'
        >
          <span className='ml-9'>Тренировки</span>
        </Link>
        <Link
          to='setup'
          className='flex items-center px-2 py-3 text-base font-medium text-gray-700 hover:bg-slate-700 rounded-xl hover:text-gray-100'
        >
          <span className='ml-9'>Сетапы</span>
        </Link>
        <Link
          to='liveries'
          className='flex items-center px-2 py-3 text-base font-medium text-gray-700 hover:bg-slate-700 rounded-xl hover:text-gray-100'
        >
          <span className='ml-9'>Ливреи</span>
        </Link>
      </ul>
    </>
  )
}

export default OrdersBtn
