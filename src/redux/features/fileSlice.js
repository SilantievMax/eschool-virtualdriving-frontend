import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetcFile = createAsyncThunk(
    "file/fetcFile",
    async () => {
        const { data } = await axios.get("/files");
        return data;
    }
);

const initialState = {
    files: {
        items: [],
        status: "loading",
    },
};

const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {},
    extraReducers: {
        [fetcFile.pending]: (state) => {
            state.files.items = [];
            state.files.status = "loading";
        },
        [fetcFile.fulfilled]: (state, action) => {
            state.files.items = action.payload;
            state.files.status = "loaded";
        },
        [fetcFile.rejected]: (state) => {
            state.files.items = [];
            state.files.status = "error";
        },
    },
});

export const fileReducer = fileSlice.reducer;