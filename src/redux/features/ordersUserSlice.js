import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetcOrdersTrainingUers = createAsyncThunk(
    "orders/fetcOrdersTrainingUers",
    async () => {
        const { data } = await axios.get("/orders/training/user");
        return data;
    }
);

const initialState = {
    orders: {
        items1: [],
        status: "loading",
    },
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: {
        [fetcOrdersTrainingUers.pending]: (state) => {
            state.orders.items1 = [];
            state.orders.status = "loading";
        },
        [fetcOrdersTrainingUers.fulfilled]: (state, action) => {
            state.orders.items1 = action.payload;
            state.orders.status = "loaded";
        },
        [fetcOrdersTrainingUers.rejected]: (state) => {
            state.orders.items1 = [];
            state.orders.status = "error";
        },
    },
});

export const ordersUserReducer = ordersSlice.reducer;