import React from "react";

const AdminHeader = () => {
    return (
        <>
        <div class="flex py-3">
            <div class="shadow-lg bg-red-500 border-l-8 border-l-red-600 mb-2 p-1 w-1/4 mx-2">
                <div class="p-4 flex flex-col">
                    <p class="text-lg text-white">В обработке:</p>
                    <p class="text-sm text-white">Тренировки - 12</p>
                    <p class="text-sm text-white">Ливреи - 12</p>
                </div>
            </div>
            <div class="shadow bg-amber-500 border-l-8 border-l-amber-600 mb-2 p-2 w-1/4 mx-2">
                <div class="p-4 flex flex-col">
                    <p class="text-lg text-white">Оплачено:</p>
                    <p class="text-sm text-white">Тренировки - 12</p>
                    <p class="text-sm text-white">Ливреи - 10</p>
                </div>
            </div>
            <div class="shadow bg-green-500 border-l-8 border-l-green-600 mb-2 p-2 w-1/4 mx-2">
                <div class="p-4 flex flex-col">
                    <p class="text-lg text-white">Заявка закрыта:</p>
                    <p class="text-sm text-white">Тренировки - 12</p>
                    <p class="text-sm text-white">Ливреи - 12</p>
                </div>
            </div>
            <div class="shadow bg-sky-500 border-l-8 border-l-sky-600 mb-2 p-2 w-1/4 mx-2">
                <div class="p-4 flex flex-col">
                    <p class="text-lg text-white">Отзывы:</p>
                    <p class="text-sm text-white">Тренировки - 12</p>
                    <p class="text-sm text-white">Ливреи - 12</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminHeader;