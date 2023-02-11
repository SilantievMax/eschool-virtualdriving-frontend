import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetcCardsSetop } from '../../../redux/features/dataSlice'
import { accessUrl } from '../../../utils/axios'

import { SetupCard } from './SetupCard'

export const SetupList = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetcCardsSetop())
	}, [dispatch])

	const { cardsSetup, status } = useSelector(state => state.data)

	if (status === 'loading') {
		return <div>Загрузка...</div>
	}

	return (
		<>
			<h1 className='font-header text-6xl mb-10'>Сетапы</h1>
			<div className='grid grid-cols-4 gap-8'>
				{cardsSetup.map(card => (
					<Link key={card._id} to={card._id}>
						<SetupCard
							name={card.name}
							price={card.price}
							imgSrc={`${accessUrl}${card.imgFile}`}
						/>
					</Link>
				))}
			</div>
		</>
	)
}
