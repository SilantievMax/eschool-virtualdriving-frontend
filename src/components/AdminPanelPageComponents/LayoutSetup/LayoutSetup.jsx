import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetcOrdersSetup } from "../../../redux/features/ordersSetupSlice";
import Table from "./components/Table";

const LayoutSetup = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((state) => state.ordersSetup);
    const isOrdersLoading = orders.status === "loading";

    React.useEffect(() => {
        dispatch(fetcOrdersSetup());
    }, []);

    return (
        <>
            <section className="mx-2 bg-slate-700 rounded p-2 text-gray-100">
                <div className="font-bold text-2xl pb-4">Сетапы</div>
                {isOrdersLoading ? (
                    <div>Загрузка...</div>
                ) : (
                    <Table orders={orders} />
                )}
            </section>
        </>
    );
};

export default LayoutSetup;
