import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const user = useSelector(state => state.auth)
  const { fullName, role, avatarUrl } = user.data

  return (
    <>
      <section className='flex items-center pl-2 py-3 border-b'>
        <img
          className='w-14 h-14 rounded-full bg-slate-400 border-none'
          src='https://api.lorem.space/image/car?w=150&h=150'
          alt=''
        />
        <div className='ml-5'>
          <div className='font-bold text-gray-800 text-base'>{fullName}</div>
          <div className='font-normal text-gray-500 text-xs uppercase'>
            {role}
          </div>
        </div>
      </section>
    </>
  )
}

export default UserProfile
