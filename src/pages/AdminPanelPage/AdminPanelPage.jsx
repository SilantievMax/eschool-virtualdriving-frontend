import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { fetchOrders } from "../../redux/features/ordersSlice";
import axios from "../../utils/axios";
import AdminAside from "../../components/ComponentsForAdminPanelPage/AdminAside/AdminAside";
import AdminHeader from "../../components/ComponentsForAdminPanelPage/AdminHeader/AdminHeader";

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
        
        {/* <AdminHeader /> */}
        {/* {isOrdersLoading ? (<h1>Загрузка</h1>) : (<h1>{orders.items[0].orderName}</h1>)} */}
        {/* <div class="flex flex-1">


            <main class="bg-white-300 flex-1 p-3 overflow-hidden">
                <div class="flex flex-col">
                    <div class="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
                        <div class="shadow-lg bg-red-500 border-l-8 border-l-red-600 mb-2 p-1 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <p class="text-lg text-white">В обработке:</p>
                                <p class="text-sm text-white">Тренировки - 12</p>
                                <p class="text-sm text-white">Ливреи - 12</p>
                            </div>
                        </div>
                        <div class="shadow bg-amber-500 border-l-8 border-l-amber-600 mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <p class="text-lg text-white">Оплачено:</p>
                                <p class="text-sm text-white">Тренировки - 12</p>
                                <p class="text-sm text-white">Ливреи - 10</p>
                            </div>
                        </div>
                        <div class="shadow bg-green-500 border-l-8 border-l-green-600 mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <p class="text-lg text-white">Заявка закрыта:</p>
                                <p class="text-sm text-white">Тренировки - 12</p>
                                <p class="text-sm text-white">Ливреи - 12</p>
                            </div>
                        </div>
                        <div class="shadow bg-sky-500 border-l-8 border-l-sky-600 mb-2 p-2 md:w-1/4 mx-2">
                            <div class="p-4 flex flex-col">
                                <p class="text-lg text-white">Отзывы:</p>
                                <p class="text-sm text-white">Тренировки - 12</p>
                                <p class="text-sm text-white">Ливреи - 12</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="rounded overflow-hidden shadow bg-white mx-2 w-full">
                            <div class="px-6 py-2 border-b border-light-grey">
                                <div class="font-bold text-xl">Тренировки</div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="overflow-hidden">
                                        <table class="min-w-full">
                                            <thead class="border-b">
                                                <tr class="bg-slate-500">
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Номер заказа
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Пользователь
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Дата заказа
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                        Дата выполнения
                                                    </th>
                                                    <th scope="col" class="text-sm font-medium text-gray-900 py-4 text-left">
                                                        Статус
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orders.items.map(order => isOrdersLoading ? (<h1>Загрузка</h1>) : (
                                                    <tr class="border-b">
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.orderNumber}</td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {order.user.fullName}
                                                        </td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {order.createdAt}
                                                        </td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {order.orderDate}
                                                        </td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {order.status}
                                                        </td>
                                                    </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div> */}
        </>
    )
}

export default AdminPanelPage;