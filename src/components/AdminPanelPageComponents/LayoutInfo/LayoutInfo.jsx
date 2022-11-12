import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCar,
    fetchCarDelete,
    fetchGetCar,
    fetchGetTrack,
    fetchTrack,
} from "../../../redux/features/infoSlice";

const LayoutInfo = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");

    const onSubmitCar = async (v) => {
        dispatch(fetchCar({ title: v }));
    };
    const onSubmitTrack = async (v) => {
        dispatch(fetchTrack({ title: v }));
    };

    const { cars } = useSelector((state) => state.info);
    const { track } = useSelector((state) => state.info);

    useEffect(() => {
        dispatch(fetchGetCar());
        dispatch(fetchGetTrack());
    }, []);

    return (
        <div className="flex">
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
            <ul className="border p-2 ml-2">
                {track &&
                    track.map((track) => (
                        <li key={track._id}>{track.title}</li>
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
                <p>Добавление трассы</p>
                <input
                    value={text2}
                    onChange={(e) => setText2(e.target.value)}
                    className="border h-6"
                    type="text"
                    name=""
                    id=""
                />
                <button
                    onClick={() => onSubmitTrack(text2)}
                    className="bg-slate-700"
                >
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default LayoutInfo;
