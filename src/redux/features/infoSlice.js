import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'utils/axios'

export const fetchGetCar = createAsyncThunk('auth/fetchGetCar', async () => {
  const { data } = await axios.get('/update/car')
  return data
})

export const fetchCar = createAsyncThunk('auth/fetchCar', async params => {
  const { cars } = await axios.post('/update/car', params)
  return cars
})

export const fetchCarDelete = createAsyncThunk(
  'auth/fetchCarDelete',
  async params => {
    const { cars } = await axios.delete(`/update/car/${params}`)
    return cars
  }
)

export const fetchGetTrack = createAsyncThunk(
  'auth/fetchGetTrack',
  async () => {
    const { data } = await axios.get('/update/track')
    return data
  }
)

export const fetchTrack = createAsyncThunk('auth/fetchTrack', async params => {
  const { tracks } = await axios.post('/update/track', params)
  return tracks
})

export const fetchTrackDelete = createAsyncThunk(
  'auth/fetchTrackDelete',
  async params => {
    const { track } = await axios.delete(`/update/track/${params}`)
    return track
  }
)

const initialState = {
  cars: null,
  tracks: null,
  status: 'loading'
}

const infoSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGetCar.pending]: state => {
      state.status = 'loading'
      state.cars = null
    },
    [fetchGetCar.fulfilled]: (state, action) => {
      state.status = 'loaded'
      state.cars = action.payload
    },
    [fetchGetCar.rejected]: state => {
      state.status = 'error'
      state.cars = null
    },
    [fetchGetTrack.pending]: state => {
      state.status = 'loading'
      state.track = null
    },
    [fetchGetTrack.fulfilled]: (state, action) => {
      state.status = 'loaded'
      state.track = action.payload
    },
    [fetchGetTrack.rejected]: state => {
      state.status = 'error'
      state.track = null
    }
  }
})

export const infoReducer = infoSlice.reducer
