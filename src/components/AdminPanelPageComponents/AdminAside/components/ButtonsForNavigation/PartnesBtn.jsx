import React from 'react'
import { Link } from 'react-router-dom'

const PartnesBtn = () => {
  return (
    <>
      <Link
        to='partner'
        className='flex items-center px-2 py-3 text-base font-medium text-gray-700 hover:bg-slate-700 rounded-xl hover:text-gray-100'
      >
        <svg
          className='h-6 w-6'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' />{' '}
          <circle cx='8.5' cy='7' r='4' />{' '}
          <line x1='20' y1='8' x2='20' y2='14' />{' '}
          <line x1='23' y1='11' x2='17' y2='11' />
        </svg>
        <span className='ml-3'>Партнеры</span>
      </Link>
    </>
  )
}

export default PartnesBtn
