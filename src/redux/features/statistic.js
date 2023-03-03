import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'utils/axios'

export const fetchStatisticOrders = createAsyncThunk(
  'auth/fetchStatisticOrders',
  async () => {
    const { data } = await axios.get('/statistic/orders')
    return data
  }
)

const initialState = {
  statisticOrders: null,
  status: 'loading'
}

const infoSlice = createSlice({
  name: 'statisticOrders',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStatisticOrders.pending]: state => {
      state.status = 'loading'
      state.statisticOrders = null
    },
    [fetchStatisticOrders.fulfilled]: (state, action) => {
      state.status = 'loaded'
      state.statisticOrders = action.payload
    },
    [fetchStatisticOrders.rejected]: state => {
      state.status = 'error'
      state.statisticOrders = null
    }
  }
})

export const infoStatistic = infoSlice.reducer
