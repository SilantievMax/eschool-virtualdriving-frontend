import React from "react";

const DropDownInfo = ({
  car,
  coment,
  communications,
  price,
  track,
  experience,
  equipment,
  executor,
  orderDate,
  orderNumber,
  fullName,
  createdAt,
  hiddenClass,
  coupon,
}) => {
  let tetHours = new Date(orderDate).getHours();
  let tetMinutes = new Date(orderDate).getMinutes();
  tetHours = String(tetHours).length === 1 ? `0${tetHours}` : tetHours;
  tetMinutes = String(tetMinutes).length === 1 ? `0${tetMinutes}` : tetMinutes;

  const inputDate = (outputDate) => {
    const date = new Date(outputDate);
    const getDate = date.getDate();
    const getMonth = date.getMonth() + 1;
    const getfullYear = date.getFullYear();
    return `${String(getDate).length === 1 ? "0" + getDate : getDate}.${
      String(getMonth).length === 1 ? "0" + getMonth : getMonth
    }.${getfullYear}`;
  };

  return (
    <tr className={`py-2 ${hiddenClass}`} id="dropdown-table">
      <td colspan="7">
        <div className="w-full flex justify-between">
          <div className="w-1/2">
            <div className="border-b py-2">
              <h2 className="font-bold text-2xl mb-1">Основная информация</h2>
              <div>
                № <span className="font-light">{orderNumber}</span>
              </div>
              <div>
                ФИО: <span className="font-light">{fullName}</span>
              </div>
              <div>
                Способ связи:
                <span className="font-light">{communications}</span>
              </div>
              <div>
                Дата оформления:
                <span className="font-light">{inputDate(createdAt)}</span>
              </div>
              <div>
                Дата выполнения:
                <span className="font-light">
                  {orderDate
                    ? `${inputDate(orderDate)} - ${tetHours}: ${tetMinutes}`
                    : "Дата не указана"}
                </span>
              </div>
            </div>
            <div className="border-b py-2">
              <h2 className="font-bold text-2xl mb-1">
                Информация по тренировке
              </h2>
              <div>
                Тренер: <span className="font-light">{executor}</span>
              </div>
              <div>
                Машина: <span className="font-light">{car}</span>
              </div>
              <div>
                Трасса: <span className="font-light">{track}</span>
              </div>
              <div>
                Опыт: <span className="font-light">{experience}</span>
              </div>
              <div>
                Коментарий: <span className="font-light">{coment}</span>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="border-l border-b py-2 p-2 h-full relative">
              <h2 className="font-bold text-2xl mb-1">
                Дополнительная информация
              </h2>
              <div>
                Оборудование: <span className="font-light">{equipment}</span>
              </div>
              <div>
                Купон: <span className="font-light">{coupon}</span>
              </div>
              <div className="absolute bottom-0 right-0">
                <span className="ml-3 text-4xl">{price}₽</span>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default DropDownInfo;
