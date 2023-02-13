import RowsTable from 'components/AdminPanelPageComponents/LayoutSetup/components/RowsTable'
import React from 'react'

const Table = ({ orders }) => {
  const items = orders.items
  console.log(items)
  return (
    <table className='table-fixed w-full'>
      <thead className='border-b-4 border-gray-500'>
        <tr className='text-left'>
          <th>Номер заказа</th>
          <th>Клиент</th>
          <th>Оформленно</th>
          <th>Выполнение</th>
          <th>Статус</th>
          <th>Прочитано</th>
          <th>Избранное</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <RowsTable
            key={item._id}
            refPartner={item.user.refPartner}
            id={item._id}
            orderNumber={item.orderNumber}
            orderDate={item.orderDate}
            car={item.car}
            track={item.track}
            experience={item.experience}
            coment={item.coment}
            communications={item.communications}
            createdAt={item.createdAt}
            mark={item.mark}
            price={item.price}
            status={item.status}
            views={item.views}
            fullName={item.user.fullName}
            equipment={item.equipment}
            executor={item.executor}
            coupon={item.coupon}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table
