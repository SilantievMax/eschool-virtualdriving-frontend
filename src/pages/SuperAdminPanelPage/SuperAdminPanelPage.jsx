import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "redux/features/authSlice";
import AdminAside from "components/AdminPanelPageComponents/AdminAside/AdminAside";
import AdminLayoutTraining from "components/AdminPanelPageComponents/LayoutTraining/LayoutTraining";
import LayoutSetup from "components/AdminPanelPageComponents/LayoutSetup/LayoutSetup";
import LayoutLiveries from "components/AdminPanelPageComponents/LayoutLiveries/LayoutLiveries";
import LayoutUsers from "components/AdminPanelPageComponents/LayoutUsers/LayoutUsers";
import LayoutFiles from "components/AdminPanelPageComponents/LayoutFiles/LayoutFiles";
import LayoutInfo from "components/AdminPanelPageComponents/LayoutInfo/LayoutInfo";
import LayoutStatistics from "components/AdminPanelPageComponents/LayoutStatistics/LayoutStatistics"
import LayoutPartner from "components/AdminPanelPageComponents/LayoutPartner/LayoutPartner";

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
                    <Route path="training" element={<AdminLayoutTraining />} />
                    <Route path="setup" element={<LayoutSetup />} />
                    <Route path="liveries" element={<LayoutLiveries />} />
                    <Route path="partner" element={<LayoutPartner />} />
                    <Route path="users" element={<LayoutUsers />} />
                    <Route path="files" element={<LayoutFiles />} />
                    <Route path="info" element={<LayoutInfo />} />
                </Routes>
            </div>
        </>
    );
};

export default SuperAdminPanelPage;
