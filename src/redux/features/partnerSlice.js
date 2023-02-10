import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "utils/axios";

export const fetchGetPartner = createAsyncThunk("partner/fetcPartner", async () => {
  const { data } = await axios.get("/partner");
  return data;
});

export const generalURLpartner = createAsyncThunk("partner/generalURLpartner", async (params) => {
  const { data } = await axios.get(`/partner/url/${params}`);
  return data;
});

export const fetchPartner = createAsyncThunk("auth/fetchPartner", async (params) => {
  const { data } = await axios.post("/partner", params);
  return data;
});

export const getOnePartner = createAsyncThunk("", async (params) => {
  const { data } = await axios.get(`/partner/${params}`);
  return data;
});

const initialState = {
  partnerInfo: [],
  linkPartner: "",
  status: "loading",
};

const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGetPartner.pending]: (state) => {
      state.partnerInfo = [];
      state.status = "loading";
    },
    [fetchGetPartner.fulfilled]: (state, action) => {
      state.partnerInfo = action.payload;
      state.status = "loaded";
    },
    [fetchGetPartner.rejected]: (state) => {
      state.partnerInfo = [];
      state.status = "error";
    },
    [generalURLpartner.pending]: (state) => {
      state.linkPartner = [];
      state.status = "loading";
    },
    [generalURLpartner.fulfilled]: (state, action) => {
      state.linkPartner = action.payload;
      state.status = "loaded";
    },
    [generalURLpartner.rejected]: (state) => {
      state.linkPartner = [];
      state.status = "error";
    },
  },
});

export const partnerReducer = partnerSlice.reducer;
