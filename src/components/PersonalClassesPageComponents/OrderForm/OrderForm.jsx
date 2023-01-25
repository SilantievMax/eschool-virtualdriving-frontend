import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetcCars, fetcTracks } from "../../../redux/features/dataSlice.js";
import img1 from "../../../assets/images/order1.webp";
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
  const [equipment, setEquipment] = React.useState("Thrustmaster T3PM Pedals, Thrustmaster T-LCM Rubber Grip, Speedlink DRIFT O.Z.");
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
    <>
      <ul className={styles.order__list}>
        <li className={styles.orser__item}>
          <img className={styles.img} src={img1} alt="img1" />
        </li>
        <li className={styles.orser__item}>
          <label className={styles.label}>
            Выберите автомобиль:
            <select className={styles.input} value={car} onChange={(e) => setCar(e.target.value)} name="pets">
              {cars.map(({ title }) => (
                <option value={title}>{title}</option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Выберите трассу:
            <select className={styles.input} value={track} onChange={(e) => setTrack(e.target.value)} name="pets">
              {tracks.map(({ title }) => (
                <option value={title}>{title}</option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Выберите дату тренировки:
            <input className={styles.input} type="datetime-local" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} placeholder="orderDate" />
          </label>
          <label className={styles.label}>
            Комментарий:
            <textarea type="textarea" className={styles.input} value={coment} onChange={(e) => setComent(e.target.value)} placeholder="coment" />
          </label>
          <label className={styles.label}>
            Как с вами связаться:
            <input
              className={styles.input}
              type="text"
              value={communications}
              onChange={(e) => setCommunications(e.target.value)}
              placeholder="communications"
            />
          </label>
        </li>
        <li className={styles.orser__item}>
          <label className={styles.label}>
            Расскажите о вашем опыте:
            <textarea type="textarea" className={styles.input} value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="experience" />
          </label>

          <label className={styles.label}>
            Какое оборудование вы используете?:
            <textarea type="textarea" className={styles.input} value={equipment} onChange={(e) => setEquipment(e.target.value)} placeholder="equipment" />
          </label>
          {/* <label className={styles.label}>Цена:
                <input
                    className={styles.input}
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="price"
                /> */}

          <label className={styles.checkbox}>
            <input className={styles.checkbox__input} type="checkbox" />
            <span>Я принимаю условия передачи информации</span>
          </label>

          <small className={styles.warning}>Поля отмеченные* являются обязательными</small>

          <button className={styles.btn} onClick={onSubmit}>
            Отправить
          </button>
        </li>
      </ul>
    </>
  );
};

export default OrderForm;
