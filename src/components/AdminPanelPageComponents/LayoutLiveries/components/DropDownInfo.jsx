import React from 'react'

const DropDownInfo = ({
  car,
  price,
  track,
  fullName,
  communications,
  item,
  hiddenClass
}) => {
  let tetHours = new Date(item.orderDate).getHours()
  let tetMinutes = new Date(item.orderDate).getMinutes()
  tetHours = String(tetHours).length === 1 ? `0${tetHours}` : tetHours
  tetMinutes = String(tetMinutes).length === 1 ? `0${tetMinutes}` : tetMinutes

  const inputDate = outputDate => {
    const date = new Date(outputDate)
    const getDate = date.getDate()
    const getMonth = date.getMonth() + 1
    const getfullYear = date.getFullYear()
    return `${String(getDate).length === 1 ? '0' + getDate : getDate}.${
      String(getMonth).length === 1 ? '0' + getMonth : getMonth
    }.${getfullYear}`
  }

  return (
    <tr className={`py-2 ${hiddenClass}`} id='dropdown-table'>
      <td colspan='7'>
        <div className='w-full flex justify-between'>
          <div className='w-1/2'>
            <div className='border-b py-2'>
              <h2 className='font-bold text-2xl mb-1'>Основная информация</h2>
              <div>
                № <span className='font-light'>{item.orderNumber}</span>
              </div>
              <div>
                ФИО: <span className='font-light'>{fullName}</span>
              </div>
              <div>
                Способ связи:
                <span className='font-light'>{communications}</span>
              </div>
              <div>
                Дата оформления:
                <span className='font-light'>{inputDate(item.createdAt)}</span>
              </div>
              <div>
                Дата выполнения:
                <span className='font-light'>
                  {item.orderDate
                    ? `${inputDate(
                        item.orderDate
                      )} - ${tetHours}: ${tetMinutes}`
                    : 'Дата не указана'}
                </span>
              </div>
            </div>
            <div className='border-b py-2'>
              <h2 className='font-bold text-2xl mb-1'>Общая информация</h2>

              <div>
                Машина: <span className='font-light'>{car}</span>
              </div>

              <div>
                Коментарий: <span className='font-light'>{item.coment}</span>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='border-l border-b py-2 p-2 h-full relative'>
              <h2 className='font-bold text-2xl mb-1'>
                Дополнительная информация
              </h2>
              <div>
                Оборудование:{' '}
                <span className='font-light'>{item.equipment}</span>
              </div>
              <div className='absolute bottom-0 right-0'>
                <span className='ml-3 text-4xl'>{price}₽</span>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default DropDownInfo
