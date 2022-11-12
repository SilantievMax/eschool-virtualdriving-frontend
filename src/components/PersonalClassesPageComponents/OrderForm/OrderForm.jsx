import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetcCars, fetcTracks } from "../../../redux/features/dataSlice.js";
import axios from "../../../utils/axios.js";
import styles from "./OrderForm.module.css";

const OrderForm = () => {
    const [isLoading, setLoading] = React.useState(false);
    const [communications, setCommunications] = React.useState("89257777777");
    const [orderDate, setOrderDate] = React.useState();
    const [car, setCar] = React.useState("BMW M4GT3");
    const [track, setTrack] = React.useState("Monza");
    const [experience, setExperience] = React.useState(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis maximus neque, sit amet lacinia ipsum mattis ac. Integer mollis."
    );
    const [coment, setComent] = React.useState(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at elit tortor. Pellentesque ultricies metus maximus massa porttitor auctor. Nulla."
    );
    const [equipment, setEquipment] = React.useState(
        "Thrustmaster T3PM Pedals, Thrustmaster T-LCM Rubber Grip, Speedlink DRIFT O.Z."
    );
    const [price, setPrice] = React.useState(1500);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetcCars());
        dispatch(fetcTracks());
    }, []);

    const { cars } = useSelector((state) => state.data);
    const { tracks } = useSelector((state) => state.data);

    console.log(cars);

    const onSubmit = async () => {
        try {
            setLoading(true);

            const fields = {
                car,
                track,
                orderDate,
                communications,
                experience,
                coment,
                equipment,
                price,
            };

            const { data } = await axios.post("/orders/training", fields);

            const id = data._id;
            if (data) {
                toast.success("Заказ создан");
            }
            setCommunications("");
        } catch (err) {
            console.warn(err.response.data);
            toast.error("Ошибка при создании заказа!");
        }
    };

    return (
        <div>
            <div className={styles.wrapper}>
                <h3>Выбирите автомобиль:</h3>
                <select
                    className={styles.input}
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                    name="pets"
                >
                    {cars.map(({ title }) => (
                        <option value={title}>{title}</option>
                    ))}
                </select>
                <h3>Выбирите трассу:</h3>
                <select
                    className={styles.input}
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    name="pets"
                >
                    {tracks.map(({title}) => (
                        <option value={title}>{title}</option>
                    ))}
                </select>
                <h3>Выбирите дату тренировки:</h3>
                <input
                    className={styles.input}
                    type="datetime-local"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    placeholder="orderDate"
                />
                <h3>Комментарий:</h3>
                <textarea
                    className={styles.input}
                    value={coment}
                    onChange={(e) => setComent(e.target.value)}
                    placeholder="coment"
                />
                <h3>Как с вами связаться:</h3>
                <input
                    className={styles.input}
                    type="text"
                    value={communications}
                    onChange={(e) => setCommunications(e.target.value)}
                    placeholder="communications"
                />

                <h3>Расскажите о вашем опыте:</h3>
                <textarea
                    className={styles.input}
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="experience"
                />
                <h3>Какое оборудование вы используете?:</h3>
                <textarea
                    className={styles.input}
                    type="text"
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                    placeholder="equipment"
                />
                {/* <h3>Цена:</h3>
                <input
                    className={styles.input}
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="price"
                /> */}

                <button className={styles.btn} onClick={onSubmit}>
                    Отправить
                </button>
            </div>
        </div>
    );
};

export default OrderForm;
