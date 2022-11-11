import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetcCardsSetop = createAsyncThunk(
    "orders/fetcCardsSetop",
    async () => {
        const { data } = await axios.get("info/setup");
        return data;
    }
);

const initialState = {
    cards: [],
    status: "loading",
};

const ordersSlice = createSlice({
    name: "setupCard",
    initialState,
    reducers: {},
    extraReducers: {
        [fetcCardsSetop.pending]: (state) => {
            state.cards = [];
            state.status = "loading";
        },
        [fetcCardsSetop.fulfilled]: (state, action) => {
            state.cards = action.payload;
            state.status = "loaded";
        },
        [fetcCardsSetop.rejected]: (state) => {
            state.cards = [];
            state.status = "error";
        },
    },
});

export const setupCardReducer = ordersSlice.reducer;
