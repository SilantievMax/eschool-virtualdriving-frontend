import React from 'react'
import modifiedDate from 'utils/modifiedDate.js'
import logo from 'assets/svg/logo.svg'

const Card = ({ item }) => {
  const accessUrl = process.env.REACT_APP_BASE_API_URL

  return (
    <li className='px-2 py-5 bg-slate-200 text-sm w-56 m-2 border-y-4 border-dotted border-white'>
    <img className='w-full mb-3' src={logo} alt='logo' />
      {item.orderName && <p className='flex justify-between'>Услуга: <span>{item.orderName}</span></p>}
      {item.orderNumber && <p className='flex justify-between'>Номер заявки: <span>{item.orderNumber}</span></p>}
      <p className='text-center text-base mt-3'>О заказе</p>
      {item.orderDate && <p className='flex justify-between'>Дата тренеровке: <span>{modifiedDate(item.orderDate)}</span></p>}
      {item.car && <p className='flex justify-between'>Машина: <span>{item.car}</span></p>}
      {item.track && <p className='flex justify-between'>Трасса: <span>{item.track}</span></p>}
      {item?.setup?.name && <p className='flex justify-between'>Имя сетапа: <span>{item?.setup.name}</span></p>}
      {item?.setup?.size && <p className='flex justify-between'>Размер файла: <span>{(item?.setup.size / 1024 / 1024).toFixed(2)}Мб</span></p>}
      {item?.simulator && <p className='flex justify-between'>Симулятор: <span>{item?.simulator}</span></p>}
      {item?.setup?.pathFile && (
        <a className='text-sky-600 font-bold' href={accessUrl + item?.setup?.pathFile}>Скачать</a>
      )}
      {item.price && <p className='flex justify-between text-lg underline font-bold'>Цена: <span>{item.price}</span></p>}
      {item.status && <p className='flex justify-between'>Статус: <span>{item.status}</span></p>}
      {item.createdAt && <p className='flex justify-between'>Дата создагия: <span>{modifiedDate(item.createdAt)}</span></p>}
    </li>
  )
}

export default Card
