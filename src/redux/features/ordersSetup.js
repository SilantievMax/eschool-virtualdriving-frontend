import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetcCardsSetop = createAsyncThunk(
    "orders/fetcCardsSetop",
    async () => {
        const { data } = await axios.get("orders/names-setup");
        return data;
    }
);

const initialState = {
    orders: {
        items: [],
        status: "loading",
    },
};

const ordersSlice = createSlice({
    name: "setupCard",
    initialState,
    reducers: {},
    extraReducers: {
        [fetcCardsSetop.pending]: (state) => {
            state.orders.items = [];
            state.orders.status = "loading";
        },
        [fetcCardsSetop.fulfilled]: (state, action) => {
            state.orders.items = action.payload;
            state.orders.status = "loaded";
        },
        [fetcCardsSetop.rejected]: (state) => {
            state.orders.items = [];
            state.orders.status = "error";
        },
    },
});

export const setupCardReducer = ordersSlice.reducer;