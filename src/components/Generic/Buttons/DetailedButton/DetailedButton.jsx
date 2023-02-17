import React from 'react'
import { Link } from 'react-router-dom'

import './detailedButton.css'

const DetailedButton = proos => {
  return (
    <>
      <Link to={`${proos.link}`} className='swiper__btn'>
        ПОДРОБНЕЕ
      </Link>
    </>
  )
}

export default DetailedButton
