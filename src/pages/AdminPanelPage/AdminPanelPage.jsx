import React from "react";
import { Outlet, Route, Routes} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { fetchOrders } from "../../redux/features/ordersSlice";
import axios from "../../utils/axios";
import AdminAside from "../../components/ComponentsForAdminPanelPage/AdminAside/AdminAside";
import AdminHeader from "../../components/ComponentsForAdminPanelPage/AdminHeader/AdminHeader";
import AdminTrainingAll from "../../components/ComponentsForAdminPanelPage/AdminTrainingAll/AdminTrainingAll";

const AdminPanelPage = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.orders);

    const isOrdersLoading = orders.status === 'loading';

    React.useEffect(() => {
        dispatch(fetchOrders())
    }, []);

    return (
        <>
        <AdminAside />
        <div className="ml-56 bg-slate-50 py-3">
            <Routes >
                <Route path="statistics" element={<AdminHeader />}/>
                <Route path="training" element={<AdminTrainingAll data={orders} />} />
                <Route path="setup" element={<>setup</>} />
                <Route path="liveries" element={<>liveries</>} />
                <Route path="users" element={<>users</>} />
                <Route path="files" element={<>files</>} />
            </Routes>
        </div>
        </>
    )
}

export default AdminPanelPage;