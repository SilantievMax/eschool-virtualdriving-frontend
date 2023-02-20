import Table from 'components/AdminPanelPageComponents/LayoutLiveries/components/Table'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetcOrdersLiveries } from 'redux/features/ordersLiveriesSlice'

const LayoutLiveries = () => {
  const dispatch = useDispatch()
  const { orders } = useSelector(state => state.ordersLiveries)
  const isOrdersLoading = orders.status === 'loading'

  useEffect(() => {
    dispatch(fetcOrdersLiveries())
  }, [])

  return (
    <>
      <section className='mx-2 bg-slate-700 rounded p-2 text-gray-100'>
        <div className='font-bold text-2xl pb-4'>Ливреи</div>
        {isOrdersLoading ? <div>Загрузка...</div> : <Table orders={orders} />}
      </section>
    </>
  )
}

export default LayoutLiveries
