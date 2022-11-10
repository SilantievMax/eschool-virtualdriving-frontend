import { configureStore } from "@reduxjs/toolkit";
import { ordersReducer } from "../features/ordersTrainingSlice";
import { authReducer } from "../features/authSlice";
import { fileReducer } from "../features/fileSlice";
import { setupCardReducer } from "../features/ordersSetup";

export default configureStore({
    reducer: {
        auth: authReducer,
        setupCard: setupCardReducer,
        ordersTraining: ordersReducer,
        file: fileReducer,
    },
});
