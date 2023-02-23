import React from 'react'
import { toast } from 'react-toastify'
import axios from 'utils/axios.js'

const arrStatus = ['В обработке', 'Оплачен', 'Ждет оценки', 'Заявка закрыта']

const DropDownUpdate = ({
  item,
  checkOrderPath,
  hiddenClass,
  status,
  setStatus
}) => {
  const onClickBtn = () => {
    try {
      axios.patch(`${checkOrderPath()}${item._id}`, {
        status
      })
      toast.success('Данные обновлены')
    } catch (err) {
      if (err) {
        console.log(err)
        toast.error('Ошибка')
      }
    }
  }
  
  return (
    <>
      <tr className={`py-2 text-black md-1 ${hiddenClass}`} id='dropdown-table'>
        <td className='pl-5' colspan='5'>
          <div className='py-2 border-b-2'>
            Статус: {' '}
            <select
              className='w-32'
              value={status}
              onChange={e => setStatus(e.target.value)}
              name='pets1'
            >
              {arrStatus.map(value => (
                <option value={value}>{value}</option>
              ))}
            </select>
          </div>
        </td>
        <td>
          <div>
            <button
              onClick={onClickBtn}
              className='m-2 bg-slate-900 rounded-md text-white px-3 py-2'
            >
              Обновить
            </button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default DropDownUpdate
