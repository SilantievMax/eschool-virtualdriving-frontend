import React, { useState } from "react";

const arrStatus = ["В обработке", "Оплачен", "Ждет оценки", "Заявка закрыта"];

const DropDownUpdate = ({ item, hiddenClass }) => {
    const [status, setStatus] = useState(item.status);
    const [orderDate, setOrderDate] = useState(item.orderDate);
    const [car, setCar] = useState(item.car);
    const [] = useState();
    const [] = useState();
    const [] = useState();
    const [] = useState();
    const [] = useState();

    return (
        <div className={`py-2 text-black ${hiddenClass}`} id="dropdown-table">
            <p>Статус</p>
            <select
                className="w-32"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                name="pets"
            >
                {arrStatus.map((value) => (
                    <option value={value}>{value}</option>
                ))}
            </select>
            <p>Дата выполнения</p>
            <input className="mt-2" type="datetime-local" value={orderDate}/>
            <p>Тренер</p>
            <input className="mt-2" type="text" />
            <p>Машина</p>
            <input className="mt-2" type="text" />
            <p>Трасса</p>
            <input className="mt-2" type="text" />
            <p>Способ связи</p>
            <input className="mt-2" type="text" />
            <p>Опыт</p>
            <input className="mt-2" type="text" />
            <p>Оборудование</p>
            <input className="mt-2" type="text" />
            <p>цена</p>
            <input className="mt-2" type="text" />
        </div>
    );
};

export default DropDownUpdate;

// communications: req.body.communications,
// orderDate: req.body.orderDate,
// car: req.body.car,
// track: req.body.track,
// experience: req.body.experience,
// files: req.body.files,
// coment: req.body.coment,
// equipment: req.body.equipment,
// executor: req.body.executor,
// price: req.body.price,
// status: req.body.status,
// mark: req.body.mark,
// views: req.body.views,
