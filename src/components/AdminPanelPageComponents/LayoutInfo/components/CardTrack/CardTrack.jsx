import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchGetTrack,
    fetchTrack,
    fetchTrackDelete,
} from "../../../../../redux/features/infoSlice";

const CardTrack = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const { track } = useSelector((state) => state.info);

    const onSubmitTrack = async () => {
        dispatch(fetchTrack({ title: text }));
        setText("");
        dispatch(fetchGetTrack());
    };

    useEffect(() => {
        dispatch(fetchGetTrack());
    }, []);

    return (
        <>
            <ul className="border p-2 ml-2">
                {track &&
                    track.map(({ title, _id }) => (
                        <li key={_id}>
                            {title}{" "}
                            <span
                                onClick={() => {
                                    dispatch(fetchTrackDelete(_id));
                                    dispatch(fetchGetTrack());
                                }}
                                className="text-red-700 cursor-pointer"
                            >
                                X
                            </span>
                        </li>
                    ))}
            </ul>
            <div className="flex flex-col ml-2">
                <p>Добавление трассы</p>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="border h-6"
                    type="text"
                    name=""
                    id=""
                />
                <button
                    onClick={() => onSubmitTrack(text)}
                    className="bg-slate-700"
                >
                    Добавить
                </button>
            </div>
            fetchTrackDelete
        </>
    );
};

export default CardTrack;
