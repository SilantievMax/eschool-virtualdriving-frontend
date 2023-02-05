import AdminAside from "components/AdminPanelPageComponents/AdminAside/AdminAside";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetcOrdersSetupUers,
    fetcOrdersTrainingUers,
} from "redux/features/ordersUserSlice";

const UserPanelPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetcOrdersTrainingUers());
        dispatch(fetcOrdersSetupUers());
    }, []);

    const { items1, items2 } = useSelector((state) => state.ordersUser.orders);

    console.log(items1);
    console.log(items2);
    return (
        <>
            <AdminAside />
            <div className="ml-56 bg-slate-50 py-3 flex">
                <ul>
                    {items1 &&
                        items1.map((item) => (
                            <li className="border" key={item._id}>
                                <p>Номер заявки: {item.orderNumber}</p>
                                <p>Услуга: {item.orderName}</p>
                                <p>{item.orderDate}</p>
                                <p>Статус: {item.status}</p>
                            </li>
                        ))}
                </ul>
                <ul>
                    {items2 &&
                        items2.map((item) => (
                            <li className="border" key={item.file._id}>
                                <p>{item.file.orderNumber}</p>
                                <p>{item.file.orderName}</p>
                                <p>{item.file.orderDate}</p>
                                <p>{item.file.status}</p>
                                <a href={item.accessLink}>
                                    {item.accessLink
                                        ? item.accessLink
                                        : "нет ссылки"}
                                </a>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
};

export default UserPanelPage;
