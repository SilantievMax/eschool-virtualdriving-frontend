import React, { useState } from "react";
import DropDownInfo from "./DropDownInfo";
import axios from "../../../../utils/axios.js";
import { useSelector } from "react-redux";

const RowsTable = ({
  id,
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
  coupon,
}) => {
  const [hiddenClass, setHiddenClass] = useState("hidden");
  const [marker, setMarker] = useState(mark);
  const [data, setData] = useState(views);
  const user = useSelector((state) => state.auth);
  const { role } = user.data;

  const onClickOpen = () => {
    setHiddenClass(hiddenClass === "hidden" ? "" : "hidden");
    if (role[0] === "SUPERADMIN") {
      axios
        .get(`/orders/setup/${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onClickUploadsOrders = () => {
    setMarker(!marker);
    if (role[0] === "SUPERADMIN") {
      return axios.patch(`/orders/setup/${id}`, {
        mark: !marker,
      });
    }
  };

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
          <div className="cursor-pointer" onClick={onClickOpen}>
            {orderNumber}
            <svg
              className="w-6 h-6 inline-block ml-8"
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
        <td>{data ? "Прочитано" : "Не прочитано"}</td>
        <td className="cursor-pointer flex">
          <svg
            onClick={onClickUploadsOrders}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`w-6 h-6 ${marker && "text-yellow-400"}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="ml-6 w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </td>
      </tr>
      <DropDownInfo
        car={car}
        coment={coment}
        communications={communications}
        price={price}
        track={track}
        experience={experience}
        equipment={equipment}
        executor={executor}
        orderDate={orderDate}
        orderNumber={orderNumber}
        createdAt={createdAt}
        fullName={fullName}
        hiddenClass={hiddenClass}
        coupon={coupon}
      />
    </>
  );
};

export default RowsTable;
