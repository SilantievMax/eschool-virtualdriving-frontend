import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'utils/axios'

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async params => {
  const { data } = await axios.post('/auth/login', params)
  if (data.token) {
    window.localStorage.setItem('token', data.token)
  }
  return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me')
  return data
})

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async params => {
    const { data } = await axios.post('/auth/register', params)
    if (data.token) {
      window.localStorage.setItem('token', data.token)
    }
    return data
  }
)

const initialState = {
  data: null,
  role: null,
  status: 'loading',
  serverStatus: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.data = null
      state.status = 'loading'
      state.serverStatus = null
      window.localStorage.removeItem('token')
    }
  },
  extraReducers: {
    [fetchLogin.pending]: state => {
      state.status = 'loading'
      state.data = null
      state.role = null
      state.serverStatus = null
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.status = 'loaded'
      state.serverStatus = action.payload.message
      state.role = action.payload.role
      state.data = action.payload
    },
    [fetchLogin.rejected]: state => {
      state.status = 'error'
      state.role = null
      state.serverStatus = null
      state.data = null
    },
    [fetchAuthMe.pending]: state => {
      state.status = 'loading'
      state.role = null
      state.data = null
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = 'loaded'
      state.role = action.payload.role
      state.data = action.payload
    },
    [fetchAuthMe.rejected]: state => {
      state.status = 'error'
      state.role = null
      state.data = null
    },
    [fetchRegister.pending]: state => {
      state.status = 'loading'
      state.role = null
      state.data = null
      state.serverStatus = null
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.status = 'loaded'
      state.serverStatus = action.payload.message
      state.role = action.payload.role
      state.data = action.payload
    },
    [fetchRegister.rejected]: (state, action) => {
      state.status = 'error'
      state.role = null
      state.serverStatus = null
      state.data = null
    }
  }
})

export const selectIsAuth = state => Boolean(state.auth.data?._id)

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions
