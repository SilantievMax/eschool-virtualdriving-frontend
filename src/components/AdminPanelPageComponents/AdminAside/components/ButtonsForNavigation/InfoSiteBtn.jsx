import React from 'react'
import { Link } from 'react-router-dom'

const InfoSiteBtn = () => {
  return (
    <>
      <Link
        to='info'
        className='flex items-center px-2 py-3 text-base font-medium text-gray-700 hover:bg-slate-700 rounded-xl hover:text-gray-100'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-6 h-6 duration-75'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13'
          />
        </svg>

        <span className='ml-3'>Информация сайта</span>
      </Link>
    </>
  )
}

export default InfoSiteBtn
