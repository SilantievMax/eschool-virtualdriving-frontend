import { configureStore } from "@reduxjs/toolkit";
import { traningReducer } from "../features/ordersTrainingSlice";
import { authReducer } from "../features/authSlice";
import { fileReducer } from "../features/fileSlice";
import { setupCardReducer } from "../features/dataSlice";
import { setupReducer } from "../features/ordersSetupSlice";
import { infoReducer } from "../features/infoSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        data: setupCardReducer,
        info: infoReducer,
        ordersTraining: traningReducer,
        ordersSetup: setupReducer,
        file: fileReducer,
    },
});
