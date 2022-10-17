import React from "react";

const AdminHeader = () => {
    return (
        <>
        <div className="flex">
            <div className="shadow-lg bg-red-500 border-l-8 border-l-red-600 mb-2 p-1 w-1/4 mx-2">
                <div className="p-4 flex flex-col">
                    <p className="text-lg text-white">В обработке:</p>
                    <p className="text-sm text-white">Тренировки - 12</p>
                    <p className="text-sm text-white">Ливреи - 12</p>
                </div>
            </div>
            <div className="shadow bg-amber-500 border-l-8 border-l-amber-600 mb-2 p-2 w-1/4 mx-2">
                <div className="p-4 flex flex-col">
                    <p className="text-lg text-white">Оплачено:</p>
                    <p className="text-sm text-white">Тренировки - 12</p>
                    <p className="text-sm text-white">Ливреи - 10</p>
                </div>
            </div>
            <div className="shadow bg-green-500 border-l-8 border-l-green-600 mb-2 p-2 w-1/4 mx-2">
                <div className="p-4 flex flex-col">
                    <p className="text-lg text-white">Заявка закрыта:</p>
                    <p className="text-sm text-white">Тренировки - 12</p>
                    <p className="text-sm text-white">Ливреи - 12</p>
                </div>
            </div>
            <div className="shadow bg-sky-500 border-l-8 border-l-sky-600 mb-2 p-2 w-1/4 mx-2">
                <div className="p-4 flex flex-col">
                    <p className="text-lg text-white">Отзывы:</p>
                    <p className="text-sm text-white">Тренировки - 12</p>
                    <p className="text-sm text-white">Ливреи - 12</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminHeader;