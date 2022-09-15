import React from "react";
import { Link } from "react-router-dom";

const  isFavourites = false

const AdminTrainingAll = (props) => {
    console.log(props)
    const removeClassHidden = () => {document.querySelector('#dropdown-table').classList.toggle('hidden')}
    return (
        <>
        <section className="mx-2 bg-slate-700 rounded p-2 text-gray-100">
            <div className="font-bold text-2xl pb-4">Тренировки</div>
            <table className="table-fixed w-full">
                <thead className="border-b-4 border-gray-500">
                    <tr className="text-left">
                        <th>Номер заказа</th>
                        <th>Клиент</th>
                        <th>Оформленно</th>
                        <th>Выполнение</th>
                        <th>Статус</th>
                        <th>Прочитано</th>
                        <th>Избранное</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-500">
                        <td className="py-2 text-sky-500">
                            <div className="cursor-pointer" onClick={removeClassHidden}>
                                538364
                                <svg class="w-6 h-6 inline-block ml-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </div>
                        </td>
                        <td>Статов Валерий</td>
                        <td>14.09.2022</td>
                        <td>16.09.2022</td>
                        <td><span className="bg-amber-500 py-1 px-3 rounded">Оплачен</span></td>
                        <td>Не прочитано</td>
                        <td className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 ${isFavourites && 'text-yellow-400'}`}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="py-2 hidden" id="dropdown-table">
                        <td colspan="7">
                            <div className="w-full flex justify-between">
                                <div className="w-1/2">
                                    <div className="border-b py-2">
                                        <h2 className="font-bold text-2xl mb-1">Основная информация</h2>
                                        <div>№ <span className="font-light">538364</span></div>
                                        <div>ФИО: <span className="font-light">Статов Валерий</span></div>
                                        <div>Способ связи: <span className="font-light">test.cde@tect.com</span></div>
                                        <div>Дата начала: <span className="font-light">20.09.2022</span></div>
                                    </div>
                                    <div className="py-2">
                                        <h2 className="font-bold text-2xl mb-1">Информация по тренировке</h2>
                                        <div>Машина: <span className="font-light"></span></div>
                                        <div>Трасса: <span className="font-light"></span></div>
                                        <div>Погодные условия: <span className="font-light"></span></div>
                                        <div>Коментарий: <span className="font-light"></span></div>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="border-l py-2 p-2 h-full relative">
                                        <h2 className="font-bold text-2xl mb-1">Дополнительная информация</h2>
                                        <div>Оборудование: <span className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed aliquid iste eius repellat. Veritatis modi iure nam fugit animi nihil dicta odio.</span></div>
                                        <div className="absolute bottom-0 right-0">
                                            <span className="ml-3">14.09.2022</span>
                                            <span className="ml-3 text-4xl">3200₽</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
        </>
    )
}

export default AdminTrainingAll;