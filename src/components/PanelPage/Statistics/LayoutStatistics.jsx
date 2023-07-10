import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStatisticOrders } from 'redux/features/statistic'

const AdminHeader = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStatisticOrders())
  }, [])

  const { statisticOrders } = useSelector(state => state.statistic)

  return (
    <>
      <div className='flex mb-5 ml-2'>
        Всего:
        <div className='mr-5'>
          Тренировок: {statisticOrders?.countTraining}шт,{' '}
        </div>
        <div className='mr-5'>Ливреи: {statisticOrders?.countLiveries}шт, </div>
        <div className='mr-5'>Сетапы: {statisticOrders?.countSetup}шт </div>
      </div>
      <div className='flex'>
        <div className='shadow-lg bg-red-500 border-l-8 border-l-red-600 mb-2 p-1 w-1/4 mx-2'>
          <div className='p-4 flex flex-col'>
            <p className='text-lg text-white'>В обработке:</p>
            <p className='text-sm text-white'>
              Тренировки - {statisticOrders?.countInProcessingTraining}
            </p>
            <p className='text-sm text-white'>
              Ливреи - {statisticOrders?.countInProcessingLiveries}
            </p>
            <p className='text-sm text-white'>
              Сетапы - {statisticOrders?.countInProcessingSetup}
            </p>
          </div>
        </div>
        <div className='shadow bg-amber-500 border-l-8 border-l-amber-600 mb-2 p-2 w-1/4 mx-2'>
          <div className='p-4 flex flex-col'>
            <p className='text-lg text-white'>Оплачено:</p>
            <p className='text-sm text-white'>
              Тренировки - {statisticOrders?.countInPaidTraining}
            </p>
            <p className='text-sm text-white'>
              Ливреи - {statisticOrders?.countInPaidLiveries}
            </p>
            <p className='text-sm text-white'>
              Сетапы - {statisticOrders?.countInPaidSetup}
            </p>
          </div>
        </div>
        <div className='shadow bg-green-500 border-l-8 border-l-green-600 mb-2 p-2 w-1/4 mx-2'>
          <div className='p-4 flex flex-col'>
            <p className='text-lg text-white'>Заявка закрыта:</p>
            <p className='text-sm text-white'>
              Тренировки - {statisticOrders?.countInOrdersClosedTraining}
            </p>
            <p className='text-sm text-white'>
              Ливреи - {statisticOrders?.countInOrdersClosedLiveries}
            </p>
            <p className='text-sm text-white'>
              Сетапы - {statisticOrders?.countInOrdersClosedSetup}
            </p>
          </div>
        </div>
        <div className='shadow bg-sky-500 border-l-8 border-l-sky-600 mb-2 p-2 w-1/4 mx-2'>
          <div className='p-4 flex flex-col'>
            <p className='text-lg text-white'>Ждет оценки:</p>
            <p className='text-sm text-white'>
              Тренировки - {statisticOrders?.countInEstimationTraining}
            </p>
            <p className='text-sm text-white'>
              Ливреи - {statisticOrders?.countInEstimationLiveries}
            </p>
            <p className='text-sm text-white'>
              Сетапы - {statisticOrders?.countInEstimationSetup}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHeader
