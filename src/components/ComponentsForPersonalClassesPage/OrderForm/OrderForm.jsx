import React from "react";

const OrderForm = () => {
    const [orderNumber, setOrderNumber] = React.useState(741565598)
    const [car, setCar] = React.useState('taha')
    const [coment, setComent] = React.useState("I found that there are several ways to handle user's text input with hooks. What is more preferable or proper way to handle an input with hooks? Which would you use?")
    const [price, setPrice] = React.useState(4444)

    console.log({orderNumber, car, coment, price})

    return (
        <div>
            <form>
                <input type="text" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} placeholder="orderNumber" />
                <input type="text" value={car} onChange={(e) => setCar(e.target.value)} placeholder="car" />
                <input type="text" value={coment} onChange={(e) => setComent(e.target.value)} placeholder="coment" />
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="price" />
                <button type="submit">Отправить</button>
            </form>
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
