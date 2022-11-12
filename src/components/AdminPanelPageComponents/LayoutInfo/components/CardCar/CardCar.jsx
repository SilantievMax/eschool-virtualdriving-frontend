import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCar,
    fetchCarDelete,
    fetchGetCar,
} from "../../../../../redux/features/infoSlice";

const CardCar = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const { cars } = useSelector((state) => state.info);

    const onSubmitCar = async (v) => {
        dispatch(fetchCar({ title: v }));
    };
    useEffect(() => {
        dispatch(fetchGetCar());
    }, []);
    return (
        <>
            <ul className="border p-2 ml-2">
                {cars &&
                    cars.map((car) => (
                        <li key={car._id}>
                            {car.title}{" "}
                            <span
                                onClick={() => {
                                    dispatch(fetchCarDelete(car._id));
                                }}
                                className="text-red-700 cursor-pointer"
                            >
                                X
                            </span>
                        </li>
                    ))}
            </ul>

            <div className="flex flex-col ml-2">
                <p>Добавление машины</p>
                <input
                    className="border h-6"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    name=""
                    id=""
                />
                <button
                    onClick={() => onSubmitCar(text)}
                    className="bg-slate-700"
                >
                    Добавить
                </button>
            </div>
        </>
    );
};

export default CardCar;
