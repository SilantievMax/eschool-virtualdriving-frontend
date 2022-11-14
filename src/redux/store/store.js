import { configureStore } from "@reduxjs/toolkit";
import { traningReducer } from "../features/ordersTrainingSlice";
import { authReducer } from "../features/authSlice";
import { fileReducer } from "../features/fileSlice";
import { setupCardReducer } from "../features/dataSlice";
import { setupReducer } from "../features/ordersSetupSlice";
import { infoReducer } from "../features/infoSlice";
import { ordersUserReducer } from "../features/ordersUserSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        data: setupCardReducer,
        info: infoReducer,
        ordersTraining: traningReducer,
        ordersSetup: setupReducer,
        ordersUser: ordersUserReducer,
        file: fileReducer,
    },
});
