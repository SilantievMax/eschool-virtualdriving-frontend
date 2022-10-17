import React from "react";
import axios from "../../../utils/axios.js";

const OrderForm = () => {
    const [isLoading, setLoading] = React.useState(false);
    const [orderNumber, setOrderNumber] = React.useState(741565552);
    const [car, setCar] = React.useState("taha");
    const [communications, setCommunications] = React.useState("89264524585");
    const [coment, setComent] = React.useState("Coment");
    const [price, setPrice] = React.useState(4444);

    const onSubmit = async () => {
        try {
            setLoading(true);

            const fields = {
                orderNumber ,
                car,
                communications,
                coment,
                price,
            };

            const { data } = await axios.post(
                "/orders/training/create",
                fields
            );

            const id = data._id;
            console.log(data)
        } catch (err) {
            console.warn(err.response.data);
            alert("Ошибка при создании статьи!");
        }
    };

    return (
        <div>
            <div>
                <input
                    type="number"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="orderNumber"
                />
                <input
                    type="text"
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                    placeholder="car"
                />
                <input
                    type="text"
                    value={coment}
                    onChange={(e) => setComent(e.target.value)}
                    placeholder="coment"
                />
                <input
                    type="text"
                    value={communications}
                    onChange={(e) => setCommunications(e.target.value)}
                    placeholder="communications"
                />
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="price"
                />
                <button onClick={onSubmit}>
                    Отправить
                </button>
            </div>
        </div>
    );
};

export default OrderForm;

/* "orderNumber": "741565597",
	"communications": "89264524585",
	"car": "Audi R8 LMS EVO II GT3",
	"track": "Zolder",
	"experience": "Опыта 3 года, гонять начал месяц назад",
	"orderDate": "Mon Sep 19 2022 12:30:36 GMT+0300",
	"coment": "Мне будет удобно связаться по телефону после 11:00",
	"equipment": "Обычный руль, обычные педали и ручник",
	"executor": "Максим петров",
	"price": 2500 */
