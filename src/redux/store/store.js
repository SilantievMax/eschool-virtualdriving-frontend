import { configureStore } from "@reduxjs/toolkit";
import { traningReducer } from "redux/features/ordersTrainingSlice";
import { liveriesReducer } from "redux/features/ordersLiveriesSlice";
import { authReducer } from "redux/features/authSlice";
import { fileReducer } from "redux/features/fileSlice";
import { setupCardReducer } from "redux/features/dataSlice";
import { setupReducer } from "redux/features/ordersSetupSlice";
import { infoReducer } from "redux/features/infoSlice";
import { ordersUserReducer } from "redux/features/ordersUserSlice";
import { partnerReducer } from "redux/features/partnerSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    data: setupCardReducer,
    info: infoReducer,
    ordersTraining: traningReducer,
    ordersSetup: setupReducer,
    ordersLiveries: liveriesReducer,
    ordersUser: ordersUserReducer,
    file: fileReducer,
    partner: partnerReducer,
  },
});
