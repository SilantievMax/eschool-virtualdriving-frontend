import React from 'react'
import { Link } from 'react-router-dom'

import './orderButton.css'

const OrderButton = props => {
	return (
		<>
			<Link to={props.link} className='services__btn'>
				ЗАКАЗАТЬ
			</Link>
		</>
	)
}

export default OrderButton
