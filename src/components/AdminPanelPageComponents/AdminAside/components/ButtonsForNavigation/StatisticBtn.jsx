import React from 'react'
import { Link } from 'react-router-dom'

const StatisticBtn = () => {
  return (
    <>
      <Link
        to='statistics'
        className='flex items-center px-2 py-3 text-base font-medium text-gray-700 hover:bg-slate-700 rounded-xl hover:text-gray-100'
      >
        <svg
          aria-hidden='true'
          className='w-6 h-6 duration-75'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
          <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
        </svg>
        <span className='ml-3'>Статистика</span>
      </Link>
    </>
  )
}

export default StatisticBtn
