import { configureStore } from "@reduxjs/toolkit";
import { ordersReducer } from "../features/ordersTrainingSlice";
import { authReducer } from "../features/authSlice";

export default configureStore({
    reducer: {
        ordersTraining: ordersReducer,
        auth: authReducer,
    },
});
