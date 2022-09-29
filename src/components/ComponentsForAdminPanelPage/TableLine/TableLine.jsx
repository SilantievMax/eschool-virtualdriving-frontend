import React from "react";

const TableLine = ({
  orderNumber,
  car,
  coment,
  communications,
  createdAt,
  views,
  mark,
  price,
  status,
  fullName,
  orderDate,
  track,
  experience,
  equipment,
  executor,
}) => {
  const [hiddenClass, setHiddenClass] = React.useState("hidden");
  let tetHours = new Date(orderDate).getHours();
  let tetMinutes = new Date(orderDate).getMinutes();
  tetHours = String(tetHours).length === 1 ? `0${tetHours}` : tetHours;
  tetMinutes = String(tetMinutes).length === 1 ? `0${tetMinutes}` : tetMinutes;
  const inputDate = (outputDate) => {
    const date = new Date(outputDate);
    const getDate = date.getDate();
    const getMonth = date.getMonth();
    const getfullYear = date.getFullYear();
    return `${String(getDate).length === 1 ? "0" + getDate : getDate}.${
      String(getMonth).length === 1 ? "0" + getMonth : getMonth
    }.${getfullYear}`;
  };

  const statusColorBg = (status) => {
    // eslint-disable-next-line default-case
    switch (status) {
      case "В обработке":
        return "bg-red-500";
      case "Оплачен":
        return "bg-amber-500";
      case "Ждет оценки":
        return "bg-sky-500";
      case "Заявка закрыта":
        return "bg-green-500";
    }
  };

  return (
    <>
      <tr className="border-b border-gray-500">
        <td className="py-2 text-sky-500">
          <div
            className="cursor-pointer"
            onClick={() =>
              setHiddenClass(hiddenClass === "hidden" ? "" : "hidden")
            }
          >
            {orderNumber}
            <svg
              class="w-6 h-6 inline-block ml-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </td>
        <td>{fullName}</td>
        <td>{inputDate(createdAt)}</td>
        <td>{orderDate ? inputDate(orderDate) : "Дата не указана"}</td>
        <td>
          <span className={`${statusColorBg(status)} py-1 px-3 rounded`}>
            {status}
          </span>
        </td>
        <td>{views ? "Прочитано" : "Не прочитано"}</td>
        <td className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={`w-6 h-6 ${mark && "text-yellow-400"}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </td>
      </tr>
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
                <div className="absolute bottom-0 right-0">
                  <span className="ml-3 text-4xl">{price}₽</span>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableLine;