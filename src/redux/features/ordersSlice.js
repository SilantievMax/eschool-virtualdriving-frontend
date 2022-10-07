import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios'

export const fetchOrders = createAsyncThunk('orders/fetcOrders', async () => {
    const { data } = await axios.get('/orders/training/getall');
    return data;
});

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
        [fetchOrders.pending]: (state) => {
            state.orders.items = [];
            state.orders.status = 'loading';
        },
        [fetchOrders.fulfilled]: (state, action) => {
            state.orders.items = action.payload;
            state.orders.status = 'loaded';
        },
        [fetchOrders.rejected]: (state) => {
            state.orders.items = [];
            state.orders.status = 'error';
        }
    }
});

export const ordersReducer = ordersSlice.reducer;