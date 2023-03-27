import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'utils/axios'

export const fetcOrdersTrainingUers = createAsyncThunk(
  'orders/fetcOrdersTrainingUers',
  async () => {
    const { data } = await axios.get('/orders/training/user')
    return data
  }
)

export const fetcOrdersSetupUers = createAsyncThunk(
  'orders/fetcOrdersSetup',
  async () => {
    const { data } = await axios.get('/orders/setup/user')
    return data
  }
)

export const fetcOrdersLiveriesUers = createAsyncThunk(
  'orders/fetcOrdersLiveries',
  async () => {
    const { data } = await axios.get('/orders/liveries/user')
    return data
  }
)

const initialState = {
  orders: {
    items1: [],
    items2: [],
    items3: [],
    status: 'loading'
  }
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: {
    [fetcOrdersTrainingUers.pending]: state => {
      state.orders.items1 = []
      state.orders.status = 'loading'
    },
    [fetcOrdersTrainingUers.fulfilled]: (state, action) => {
      state.orders.items1 = action.payload
      state.orders.status = 'loaded'
    },
    [fetcOrdersTrainingUers.rejected]: state => {
      state.orders.items1 = []
      state.orders.status = 'error'
    },
    [fetcOrdersSetupUers.pending]: state => {
      state.orders.items2 = []
      state.orders.status = 'loading'
    },
    [fetcOrdersSetupUers.fulfilled]: (state, action) => {
      state.orders.items2 = action.payload
      state.orders.status = 'loaded'
    },
    [fetcOrdersSetupUers.rejected]: state => {
      state.orders.items2 = []
      state.orders.status = 'error'
    },
    [fetcOrdersLiveriesUers.pending]: state => {
      state.orders.items3 = []
      state.orders.status = 'loading'
    },
    [fetcOrdersLiveriesUers.fulfilled]: (state, action) => {
      state.orders.items3 = action.payload
      state.orders.status = 'loaded'
    },
    [fetcOrdersLiveriesUers.rejected]: state => {
      state.orders.items3 = []
      state.orders.status = 'error'
    }
  }
})

export const ordersUserReducer = ordersSlice.reducer
