import AdminAside from 'components/PanelPage/AsidePanel/AsidePanel'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetcOrdersLiveriesUers,
  fetcOrdersSetupUers,
  fetcOrdersTrainingUers
} from 'redux/features/ordersUserSlice'
import Card from './Card'
import { selectIsAuth } from 'redux/features/authSlice'
import { Navigate } from 'react-router-dom'

const UserPanelPage = () => {
  const isAuth = useSelector(selectIsAuth)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetcOrdersTrainingUers())
    dispatch(fetcOrdersSetupUers())
    dispatch(fetcOrdersLiveriesUers())
  }, [])

  const { items1, items2, items3 } = useSelector(
    state => state.ordersUser.orders
  )

  if (!isAuth) {
    return <Navigate to='/' />
  }

  return (
    <>
      <AdminAside />
      <div className='absolute ml-56 bg-slate-50 py-3 w-[calc(100%-14rem)] min-h-full'>
        {items1.length || items2.length || items3.length ? (
          <div className='mx-2 rounded p-2 border'>
            <h2 className='font-bold text-2xl pb-4'>Ваши заказы</h2>
            <ul className='flex'>
              {items1 && items1.map(item => <Card item={item} />)}
            </ul>
            <ul className='flex'>
              {items2 && items2.map(item => <Card item={item} />)}
            </ul>
            <ul className='flex'>
              {items3 && items3.map(item => <Card item={item} />)}
            </ul>
          </div>
        ) : (
          <div className='font-bold text-2xl pb-4 text-center'>
            Тут будут ваши заказы!
          </div>
        )}
      </div>
    </>
  )
}

export default UserPanelPage
