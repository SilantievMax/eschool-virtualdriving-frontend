import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'utils/axios'

export const fetcOrdersLiveries = createAsyncThunk(
	'orders/fetcOrdersLiveries',
	async () => {
		const { data } = await axios.get('/orders/liveries/')
		return data
	}
)

const initialState = {
	orders: {
		items: [],
		status: 'loading'
	}
}

const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {},
	extraReducers: {
		[fetcOrdersLiveries.pending]: state => {
			state.orders.items = []
			state.orders.status = 'loading'
		},
		[fetcOrdersLiveries.fulfilled]: (state, action) => {
			state.orders.items = action.payload
			state.orders.status = 'loaded'
		},
		[fetcOrdersLiveries.rejected]: state => {
			state.orders.items = []
			state.orders.status = 'error'
		}
	}
})

export const liveriesReducer = ordersSlice.reducer
