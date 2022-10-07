import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../redux/features/ordersSlice";
import Table from "./TrainingComponents/Table";

const AdminLayoutTraining = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.orders);
    
    React.useEffect(() => {
        dispatch(fetchOrders());
    }, []);

    const isOrdersLoading = orders.status === "loading";

    return (
        <>
            <section className="mx-2 bg-slate-700 rounded p-2 text-gray-100">
                <div className="font-bold text-2xl pb-4">Тренировки</div>
                {isOrdersLoading ? (
                    <div>Загрузка...</div>
                ) : (
                    <Table orders={orders} />
                )}
            </section>
        </>
    );
};

export default AdminLayoutTraining;
