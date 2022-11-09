import { configureStore } from "@reduxjs/toolkit";
import { ordersReducer } from "../features/ordersTrainingSlice";
import { authReducer } from "../features/authSlice";
import { fileReducer } from "../features/fileSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        ordersTraining: ordersReducer,
        file: fileReducer,
    },
});
