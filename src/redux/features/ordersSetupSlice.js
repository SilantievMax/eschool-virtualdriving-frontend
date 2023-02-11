import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'utils/axios'

export const fetcOrdersSetup = createAsyncThunk(
	'orders/fetcOrdersSetup',
	async () => {
		const { data } = await axios.get('/orders/setup/')
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
		[fetcOrdersSetup.pending]: state => {
			state.orders.items = []
			state.orders.status = 'loading'
		},
		[fetcOrdersSetup.fulfilled]: (state, action) => {
			state.orders.items = action.payload
			state.orders.status = 'loaded'
		},
		[fetcOrdersSetup.rejected]: state => {
			state.orders.items = []
			state.orders.status = 'error'
		}
	}
})

export const setupReducer = ordersSlice.reducer
