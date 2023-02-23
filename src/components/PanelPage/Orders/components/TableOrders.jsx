import Loader from 'components/Generic/Loader/Loader'
import React from 'react'

import Table from './Table'

const TableOrders = ({ nameTable, loader, orders }) => {
  return (
    <>
      <section className='mx-2 rounded p-2 border'>
        <div className='font-bold text-2xl pb-4'>{nameTable}</div>
        {loader ? <Loader /> : <Table orders={orders} />}
      </section>
    </>
  )
}

export default TableOrders
