import React from 'react'
import { Link } from 'react-router-dom'

const UsersBtn = () => {
  return (
    <>
      <Link
        to='users'
        className='flex items-center px-2 py-3 text-base font-medium text-gray-700 hover:bg-slate-700 rounded-xl hover:text-gray-100'
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
            d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
            clip-rule='evenodd'
          ></path>
        </svg>
        <span className='ml-3'>Пользователи</span>
      </Link>
    </>
  )
}

export default UsersBtn
