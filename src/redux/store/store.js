import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from 'redux/features/authSlice'
import { setupCardReducer } from 'redux/features/dataSlice'
import { fileReducer } from 'redux/features/fileSlice'
import { infoReducer } from 'redux/features/infoSlice'
import { liveriesReducer } from 'redux/features/ordersLiveriesSlice'
import { setupReducer } from 'redux/features/ordersSetupSlice'
import { traningReducer } from 'redux/features/ordersTrainingSlice'
import { ordersUserReducer } from 'redux/features/ordersUserSlice'
import { partnerReducer } from 'redux/features/partnerSlice'

export default configureStore({
	reducer: {
		auth: authReducer,
		data: setupCardReducer,
		info: infoReducer,
		ordersTraining: traningReducer,
		ordersSetup: setupReducer,
		ordersLiveries: liveriesReducer,
		ordersUser: ordersUserReducer,
		file: fileReducer,
		partner: partnerReducer
	}
})
