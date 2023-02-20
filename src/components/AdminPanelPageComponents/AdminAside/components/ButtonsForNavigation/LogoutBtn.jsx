import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from 'redux/features/authSlice'

const LogoutBtn = () => {
  const dispatch = useDispatch()

  const onClickLogout = () => {
    dispatch(logout())
  }
  return (
    <>
      <Link
        onClick={onClickLogout}
        to='#'
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
            d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
            clip-rule='evenodd'
          ></path>
        </svg>
        <span className='ml-3'>Выход</span>
      </Link>
    </>
  )
}

export default LogoutBtn
