import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'utils/axios'

export const fetcOrdersTraining = createAsyncThunk(
  'orders/fetcOrdersTraining',
  async () => {
    const { data } = await axios.get('/orders/training/')
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
    [fetcOrdersTraining.pending]: state => {
      state.orders.items = []
      state.orders.status = 'loading'
    },
    [fetcOrdersTraining.fulfilled]: (state, action) => {
      state.orders.items = action.payload
      state.orders.status = 'loaded'
    },
    [fetcOrdersTraining.rejected]: state => {
      state.orders.items = []
      state.orders.status = 'error'
    }
  }
})

export const traningReducer = ordersSlice.reducer
