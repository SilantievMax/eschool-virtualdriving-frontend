import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetcOrdersLiveries } from 'redux/features/ordersLiveriesSlice'

import TableOrders from './components/TableOrders'

const LayoutLiveries = () => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.ordersLiveries)
  const isOrdersLoading = orders.status === 'loading'

  useEffect(() => {
    dispatch(fetcOrdersLiveries())
  }, [])

  return (
    <>
      <TableOrders
        nameTable='Ливреи'
        loader={isOrdersLoading}
        orders={orders}
      />
    </>
  )
}

export default LayoutLiveries
