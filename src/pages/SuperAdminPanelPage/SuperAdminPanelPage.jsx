import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/features/authSlice";
import AdminAside from "../../components/AdminPanelPageComponents/AdminAside/AdminAside";
import LayoutStatistics from "../../components/AdminPanelPageComponents/LayoutStatistics/LayoutStatistics";
import LayoutTraining from "../../components/AdminPanelPageComponents/LayoutTraining/LayoutTraining";
import LayoutFiles from "../../components/AdminPanelPageComponents/LayoutFiles/LayoutFiles";
import LayoutSetup from "../../components/AdminPanelPageComponents/LayoutSetup/LayoutSetup";
import LayoutLiveries from "../../components/AdminPanelPageComponents/LayoutLiveries/LayoutLiveries";
import LayoutUsers from "../../components/AdminPanelPageComponents/LayoutUsers/LayoutUsers";

const SuperAdminPanelPage = () => {
    const isAuth = useSelector(selectIsAuth);

    if (!isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <AdminAside />
            <div className="ml-56 bg-slate-50 py-3">
                <Routes>
                    <Route path="statistics" element={<LayoutStatistics />} />
                    <Route path="training" element={<LayoutTraining />} />
                    <Route path="setup" element={<LayoutSetup />} />
                    <Route path="liveries" element={<LayoutLiveries />} />
                    <Route path="users" element={<LayoutUsers />} />
                    <Route path="files" element={<LayoutFiles />} />
                </Routes>
            </div>
        </>
    );
};

export default SuperAdminPanelPage;
