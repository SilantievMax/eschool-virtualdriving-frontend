import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetcOrdersTraining } from 'redux/features/ordersTrainingSlice'

import TableOrders from './components/TableOrders'

const LayoutTraining = () => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.ordersTraining)
  const isOrdersLoading = orders.status === 'loading'

  useEffect(() => {
    dispatch(fetcOrdersTraining())
  }, [])

  return (
    <>
      <TableOrders
        nameTable='Тренировки'
        loader={isOrdersLoading}
        orders={orders}
      />
    </>
  )
}

export default LayoutTraining
