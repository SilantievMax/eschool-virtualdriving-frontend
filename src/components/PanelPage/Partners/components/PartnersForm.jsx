import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetPartner, fetchPartner } from 'redux/features/partnerSlice'

const PartnersForm = () => {
  const dispatch = useDispatch()
  const [namePartner, setNamePartner] = useState('')
  const [description, setDescription] = useState('')
  const onSubmitCar = async () => {
    dispatch(
      fetchPartner({ namePartner: namePartner, description: description })
    )
    setNamePartner('')
    setDescription('')
    dispatch(fetchGetPartner())
  }
  return (
    <>
      <div className=' w-21 mb-10 ml-20'>
        <p>Название партнера</p>
        <input
          className='border h-6'
          type='text'
          value={namePartner}
          onChange={e => setNamePartner(e.target.value)}
          name=''
          id=''
        />
        <p>Описание</p>
        <textarea
          className='border h-16 '
          type='text'
          value={description}
          onChange={e => setDescription(e.target.value)}
          name=''
          id=''
        />
        <button onClick={onSubmitCar} className='bg-slate-700'>
          Добавить
        </button>
      </div>
    </>
  )
}

export default PartnersForm
