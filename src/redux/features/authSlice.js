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
	status: 'loading'
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			state.data = null
			window.localStorage.removeItem('token')
		}
	},
	extraReducers: {
		[fetchLogin.pending]: state => {
			state.status = 'loading'
			state.data = null
		},
		[fetchLogin.fulfilled]: (state, action) => {
			state.status = 'loaded'
			state.role = action.payload.role[0]
			state.data = action.payload
		},
		[fetchLogin.rejected]: state => {
			state.status = 'error'
			state.data = null
		},
		[fetchAuthMe.pending]: state => {
			state.status = 'loading'
			state.role = null
			state.data = null
		},
		[fetchAuthMe.fulfilled]: (state, action) => {
			state.status = 'loaded'
			state.role = action.payload.role[0]
			state.data = action.payload
		},
		[fetchAuthMe.rejected]: state => {
			state.status = 'error'
			state.role = null
			state.data = null
		},
		[fetchRegister.pending]: state => {
			state.status = 'loading'
			state.data = null
		},
		[fetchRegister.fulfilled]: (state, action) => {
			state.status = 'loaded'
			state.role = action.payload.role[0]
			state.data = action.payload
		},
		[fetchRegister.rejected]: state => {
			state.status = 'error'
			state.data = null
		}
	}
})

export const selectIsAuth = state => Boolean(state.auth.data)

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions
