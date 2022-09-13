import React from "react";
import { Link } from "react-router-dom";

const AdminAside = () => {
    const removeClassHidden = () => {document.querySelector('#dropdown-example').classList.toggle('hidden')}

    return (
        <>
        <aside className="fixed w-56 h-screen font-sans bg-slate-50">
            <section className="flex items-center pl-2 py-3 border-b">
                <img className="w-14 rounded-full" src="https://api.lorem.space/image/car?w=150&h=150" alt="" />
                <div className="ml-5">
                    <div className="font-bold text-gray-800 text-base">Максим С.</div>
                    <div className="font-normal text-gray-500 text-xs uppercase">Admin</div>
                </div>
            </section>
            <section>
                <ul>
                    <li>
                        <Link to="#" class="flex items-center px-2 py-3 text-base font-medium text-gray-900 hover:bg-slate-100">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span class="ml-3">Статистика</span>
                        </Link>
                    </li>
                    <li>
                        <button type="button" onClick={removeClassHidden} class="flex items-center p-2 w-full text-base font-medium text-gray-900 transition duration-75 group hover:bg-gray-100" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Заказы</span>
                            <svg sidebar-toggle-item class="w-6 h-6 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                        <ul id="dropdown-example" class="hidden py-2 space-y-2">
                            <Link to="#" class="flex items-center px-2 py-2 text-base font-medium text-gray-900 hover:bg-slate-100">
                                <span class="ml-9">Тренировки</span>
                            </Link>
                            <Link to="#" class="flex items-center px-2 py-2 text-base font-medium text-gray-900 hover:bg-slate-100">
                                <span class="ml-9">Сетапы</span>
                            </Link>
                            <Link to="#" class="flex items-center px-2 py-2 text-base font-medium text-gray-900 hover:bg-slate-100">
                                <span class="ml-9">Ливреи</span>
                            </Link>
                        </ul>
                    </li>
                    <li>
                        <Link to="#" class="flex items-center px-2 py-3 text-base font-medium text-gray-900 hover:bg-slate-100">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            <span class="ml-3">Пользователи</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" class="flex items-center px-2 py-3 text-base font-medium text-gray-900 hover:bg-slate-100">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span class="ml-3">Файлы</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link to="#" class="flex items-center px-2 py-3 text-base font-medium text-gray-900 hover:bg-slate-100">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                            <span class="ml-3">Выход</span>
                        </Link>
                    </li>
                </ul>
            </section>
        </aside>
        </>
    )
}

export default AdminAside;