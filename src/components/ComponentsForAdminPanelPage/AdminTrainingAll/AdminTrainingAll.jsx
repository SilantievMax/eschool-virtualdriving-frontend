import React from "react";
import { Link } from "react-router-dom";
import TableLine from "../TableLine/TableLine";

const AdminTrainingAll = ({ data }) => {
  const items = data.items;
  const removeClassHidden = () => {
    document.querySelector("#dropdown-table").classList.toggle("hidden");
  };
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
            {items.map((item, i) => (
              <TableLine
                key={i}
                orderNumber={item.orderNumber}
                car={item.car}
                coment={item.coment}
                communications={item.communications}
                createdAt={item.createdAt}
                mark={item.mark}
                price={item.price}
                status={item.status}
                views={item.views}
                fullName={item.user.fullName}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default AdminTrainingAll;
