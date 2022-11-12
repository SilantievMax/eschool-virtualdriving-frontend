import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetcCars } from "../../../../redux/features/dataSlice";
import { fetcOrdersTraining } from "../../../../redux/features/ordersTrainingSlice";
import axios from "../../../../utils/axios.js";

const arrStatus = ["В обработке", "Оплачен", "Ждет оценки", "Заявка закрыта"];

const DropDownUpdate = ({ status, setStatus, item, hiddenClass }) => {
    const [orderDate, setOrderDate] = useState(item.orderDate);
    const [car, setCar] = useState(item.car);
    const [track, setTrack] = useState(item.track);
    const [communications, setCommunications] = useState(item.communications);
    const [price, setPrice] = useState(item.price);
    const [] = useState();
    const [] = useState();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetcCars());
    }, []);

    const { cars } = useSelector((state) => state.data);
    const { tracks } = useSelector((state) => state.data);

    const onClickBtn = () => {
        return axios
            .patch(`/orders/training/${item._id}`, {
                status,
                car,
                track,
                communications,
                price,
            })
            .then((res) => toast.success("Данные обновлены"))
            .catch((err) => toast.error("Произошла ошибка"));
    };

    return (
        <div className={`py-2 text-black ${hiddenClass}`} id="dropdown-table">
            <p>Статус</p>
            <select
                className="w-32"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                name="pets1"
            >
                {arrStatus.map((value) => (
                    <option value={value}>{value}</option>
                ))}
            </select>
            <p>Дата выполнения</p>
            <input className="mt-2" type="datetime-local" value={orderDate} />
            <p>Тренер</p>
            <input className="mt-2" type="text" />
            <p>Машина</p>
            <select
                className="w-80"
                value={car}
                onChange={(e) => setCar(e.target.value)}
                name="pets2"
            >
                {cars.map((value) => (
                    <option value={value.title}>{value.title}</option>
                ))}
            </select>
            <p>Трасса</p>
            <select
                className="w-80"
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                name="pets2"
            >
                {tracks.map((value) => (
                    <option value={value.title}>{value.title}</option>
                ))}
            </select>
            <p>Способ связи</p>
            <input
                className="mt-2"
                type="text"
                value={communications}
                onChange={(e) => setCommunications(e.target.value)}
            />
            <p>Опыт</p>
            <input className="mt-2" type="text" />
            <p>Оборудование</p>
            <input className="mt-2" type="text" />
            <p>цена</p>
            <input
                className="mt-2"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button
                onClick={onClickBtn}
                className="m-2 bg-slate-900 text-white px-3 py-2"
            >
                Обновить
            </button>
        </div>
    );
};

export default DropDownUpdate;
