import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetcOrdersTraining } from 'redux/features/ordersTrainingSlice'

import Table from '../../AdminPanelPageComponents/LayoutTraining/components/Table'

const LayoutTraining = () => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.ordersTraining)
  const isOrdersLoading = orders.status === 'loading'

  useEffect(() => {
    dispatch(fetcOrdersTraining())
  }, [])

  return (
    <>
      <section className='mx-2 rounded p-2'>
        <div className='font-bold text-2xl pb-4'>Тренировки</div>
        {isOrdersLoading ? <div>Загрузка...</div> : <Table orders={orders} />}
      </section>
    </>
  )
}

export default LayoutTraining
