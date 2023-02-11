import { useSelector } from 'react-redux'

import { accessUrl } from '../../../utils/axios'

export const SetupCarCard = () => {
	const { setup } = useSelector(state => state.data)

	if (!setup.imgCarFile) return

	return (
		<div className='bg-[#17181c] text-white py-20'>
			<div className='container max-w-screen-xl mx-auto'>
				<img src={`${accessUrl}${setup.imgCarFile}`} alt='BMW' />
			</div>
		</div>
	)
}
