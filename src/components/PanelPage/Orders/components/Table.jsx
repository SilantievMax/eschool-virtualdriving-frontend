import RowsTable from './RowsTable'

const NameCollom = () => {
  return (
    <tr className='text-left'>
      <th>Номер заказа</th>
      <th>Клиент</th>
      <th>Оформленно</th>
      <th>Выполнение</th>
      <th>Статус</th>
      <th>Прочитано</th>
      <th></th>
    </tr>
  )
}

const Table = ({ orders }) => {
  const items = orders.items
  return (
    <table className='table-fixed w-full'>
      <thead className='border-b-4 border-gray-500'>
        <NameCollom />
      </thead>
      <tbody>
        {items.map(item => (
          <>
            <RowsTable key={item._id} item={item} />
          </>
        ))}
      </tbody>
    </table>
  )
}

export default Table
