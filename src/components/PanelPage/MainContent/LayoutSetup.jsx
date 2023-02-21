import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetcOrdersSetup } from 'redux/features/ordersSetupSlice'

import TableOrders from './components/TableOrders'

const LayoutSetup = () => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.ordersSetup)
  const isOrdersLoading = orders.status === 'loading'

  useEffect(() => {
    dispatch(fetcOrdersSetup())
  }, [])

  return (
    <>
      <TableOrders
        nameTable='Сетапы'
        loader={isOrdersLoading}
        orders={orders}
      />
    </>
  )
}

export default LayoutSetup
