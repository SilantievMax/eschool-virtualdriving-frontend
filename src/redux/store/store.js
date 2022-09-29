import { configureStore } from "@reduxjs/toolkit";
import { ordersReducer } from "../features/ordersSlice";
import { authReducer } from "../features/authSlice";

export const store = configureStore({
    reducer: {
        orders: ordersReducer,
        auth: authReducer,
    }
});