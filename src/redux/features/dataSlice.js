import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'utils/axios'

export const fetcCardsSetop = createAsyncThunk(
  'orders/fetcCardsSetop',
  async () => {
    const { data } = await axios.get('info/setup')
    return data
  }
)

export const fetchSetup = createAsyncThunk('orders/fetchSetup', async id => {
  const { data } = await axios.get(`info/setup/${id}`)
  return data
})

export const fetcCars = createAsyncThunk('orders/fetcCars', async () => {
  const { data } = await axios.get('info/car')
  return data
})

export const fetcTracks = createAsyncThunk('orders/fetcTracks', async () => {
  const { data } = await axios.get('info/track')
  return data
})

const initialState = {
  cardsSetup: [],
  setup: {},
  cars: [],
  tracks: [],
  status: 'loading'
}

const ordersSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [fetcCardsSetop.pending]: state => {
      state.cardsSetup = []
      state.status = 'loading'
    },
    [fetcCardsSetop.fulfilled]: (state, action) => {
      state.cardsSetup = action.payload
      state.status = 'loaded'
    },
    [fetcCardsSetop.rejected]: state => {
      state.cardsSetup = []
      state.status = 'error'
    },
    [fetchSetup.pending]: state => {
      state.setup = {}
      state.status = 'loading'
    },
    [fetchSetup.fulfilled]: (state, action) => {
      state.setup = action.payload
      state.status = 'loaded'
    },
    [fetchSetup.rejected]: state => {
      state.setup = {}
      state.status = 'error'
    },
    [fetcCars.pending]: state => {
      state.cars = []
      state.status = 'loading'
    },
    [fetcCars.fulfilled]: (state, action) => {
      state.cars = action.payload
      state.status = 'loaded'
    },
    [fetcCars.rejected]: state => {
      state.cars = []
      state.status = 'error'
    },
    [fetcTracks.pending]: state => {
      state.tracks = []
      state.status = 'loading'
    },
    [fetcTracks.fulfilled]: (state, action) => {
      state.tracks = action.payload
      state.status = 'loaded'
    },
    [fetcTracks.rejected]: state => {
      state.tracks = []
      state.status = 'error'
    }
  }
})

export const setupCardReducer = ordersSlice.reducer
