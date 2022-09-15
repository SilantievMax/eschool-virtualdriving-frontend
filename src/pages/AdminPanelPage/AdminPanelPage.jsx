import React from "react";
import { Outlet} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { fetchOrders } from "../../redux/features/ordersSlice";
import axios from "../../utils/axios";
import AdminAside from "../../components/ComponentsForAdminPanelPage/AdminAside/AdminAside";

const AdminPanelPage = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.orders);

    const isOrdersLoading = orders.status === 'loading';
    
    // console.log(isOrdersLoading ? '' : orders.items[0].orderName)
    React.useEffect(() => {
        dispatch(fetchOrders())
    }, []);

    return (
        <>
        <AdminAside />
        <div className="ml-56 bg-slate-50 py-3">
            <Outlet />
        </div>
        </>
    )
}

export default AdminPanelPage;