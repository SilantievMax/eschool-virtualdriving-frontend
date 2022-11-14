import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminAside from "../../components/AdminPanelPageComponents/AdminAside/AdminAside";
import { fetcOrdersSetupUers, fetcOrdersTrainingUers } from "../../redux/features/ordersUserSlice";

const UserPanelPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetcOrdersTrainingUers());
        dispatch(fetcOrdersSetupUers());
    }, []);

    const { orders } = useSelector((state) => state.ordersUser);

    console.log(orders);
    return (
        <>
            <AdminAside />
            <div className="ml-56 bg-slate-50 py-3"></div>
        </>
    );
};

export default UserPanelPage;
