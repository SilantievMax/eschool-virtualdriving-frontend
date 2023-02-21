import React from 'react'
import modifiedDate from 'utils/modifiedDate.js'

// нужно переписать BasicInformation
const BasicInformation = ({ item }) => {
  let tetHours = new Date(item.orderDate).getHours()
  let tetMinutes = new Date(item.orderDate).getMinutes()
  tetHours = String(tetHours).length === 1 ? `0${tetHours}` : tetHours
  tetMinutes = String(tetMinutes).length === 1 ? `0${tetMinutes}` : tetMinutes
  return (
    <>
      <div className='border-b py-2'>
        <h2 className='font-bold text-2xl mb-1'>Основная информация</h2>
        <div>
          № <span className='font-light'>{item?.orderNumber}</span>
        </div>
        <div>
          ФИО: <span className='font-light'>{item?.user.fullName}</span>
        </div>
        <div>
          Способ связи:
          <span className='font-light'>{item?.communications}</span>
        </div>
        <div>
          Дата оформления:
          <span className='font-light'>{modifiedDate(item?.createdAt)}</span>
        </div>
        <div>
          Дата выполнения:
          <span className='font-light'>
            {item.orderDate
              ? `${modifiedDate(item.orderDate)} - ${tetHours}: ${tetMinutes}`
              : 'Дата не указана'}
          </span>
        </div>
      </div>
    </>
  )
}

const OrdersInformation = ({ item }) => {
  return (
    <>
      <div className='border-b py-2'>
        <h2 className='font-bold text-2xl mb-1'>Информация по тренировке</h2>
        <div>{item?.executor && `Тренер: ${item.executor}`}</div>
        <div>{item?.car && `Машина: ${item.car}`}</div>
        <div>{item?.track && `Трасса: ${item.track}`}</div>
        <div>{item?.experience && `Опыт: ${item.experience}`}</div>
        <div>{item?.coment && `Коментарий: ${item.coment}`}</div>
        <div>{item?.experience && `Опыт: ${item.experience}`}</div>
        <div>{item?.quantityTrining && `Кол-во: ${item.quantityTrining}`}</div>
        <div>{item?.promocode && `Промокод: ${item.promocode}`}</div>
      </div>
    </>
  )
}

const AdditionalInformation = ({ item }) => {
  return (
    <>
      <div className='border-l border-b py-2 p-2 h-full relative'>
        <h2 className='font-bold text-2xl mb-1'>Дополнительная информация</h2>
        <div>
          <div>{item?.equipment && `Оборудование: ${item.equipment}`}</div>
        </div>
        <div>
          <div>{item?.coupon && `Купон: ${item.coupon}`}</div>
        </div>
        <div>
          <div>
            {item?.user?.refPartner?.namePartner &&
              `Партнер: ${item.user.refPartner.namePartner}`}
          </div>
        </div>
        <div className='absolute bottom-0 right-0'>
          <span className='ml-3 text-4xl'>{item?.price}₽</span>
        </div>
      </div>
    </>
  )
}

const DropDownInfo = ({ item, hiddenClass }) => {
  return (
    <>
      <tr className={`py-2 ${hiddenClass}`} id='dropdown-table'>
        <td colspan='7'>
          <div className='w-full flex justify-between'>
            <div className='w-1/2'>
              <BasicInformation item={item} />
              <OrdersInformation item={item} />
            </div>
            <div className='w-1/2'>
              <AdditionalInformation item={item} />
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}

export default DropDownInfo
