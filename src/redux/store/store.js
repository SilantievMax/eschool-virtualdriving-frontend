import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "../features/auth/authSlice";
import { ordersReducer } from "../features/ordersSlice";

export const store = configureStore({
    reducer: {
        // auth: authSlice,
        orders: ordersReducer
    }
});