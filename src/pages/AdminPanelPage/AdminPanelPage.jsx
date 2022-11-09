import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminAside from "../../components/ComponentsForAdminPanelPage/AdminAside/AdminAside";
import AdminHeader from "../../components/ComponentsForAdminPanelPage/AdminHeader/AdminHeader";
import { selectIsAuth } from "../../redux/features/authSlice";
import AdminLayoutTraining from "../../components/ComponentsForAdminPanelPage/AdminLayoutTraining/AdminLayoutTraining";
import LayoutFiles from "../../components/ComponentsForAdminPanelPage/AdminLayoutFiles/AdminLayoutFiles";

const AdminPanelPage = () => {
    const isAuth = useSelector(selectIsAuth);

    if (!isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <AdminAside />
            <div className="ml-56 bg-slate-50 py-3">
                <Routes>
                    <Route path="statistics" element={<AdminHeader />} />
                    <Route path="training" element={<AdminLayoutTraining />} />
                    <Route path="setup" element={<>setup</>} />
                    <Route path="liveries" element={<>liveries</>} />
                    <Route path="users" element={<>users</>} />
                    <Route path="files" element={<LayoutFiles />} />
                </Routes>
            </div>
        </>
    );
};

export default AdminPanelPage;
