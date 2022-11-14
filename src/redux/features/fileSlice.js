import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetcFile = createAsyncThunk("file/fetcFile", async () => {
    const { data } = await axios.get("/update/file");
    return data;
});

export const deleteFile = createAsyncThunk(
    "auth/deleteFile",
    async (params) => {
        const { cars } = await axios.delete(`/update/file/${params}`);
        return cars;
    }
);

const initialState = {
    filesInfo: [],
    status: "loading",
};

const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {},
    extraReducers: {
        [fetcFile.pending]: (state) => {
            state.filesInfo = [];
            state.status = "loading";
        },
        [fetcFile.fulfilled]: (state, action) => {
            state.filesInfo = action.payload;
            state.status = "loaded";
        },
        [fetcFile.rejected]: (state) => {
            state.filesInfo = [];
            state.status = "error";
        },
    },
});

export const fileReducer = fileSlice.reducer;
