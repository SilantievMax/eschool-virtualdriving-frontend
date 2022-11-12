import { list } from "postcss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchGetTrack,
    fetchTrack,
} from "../../../../../redux/features/infoSlice";

const CardTrack = () => {
    const dispatch = useDispatch();
    const [text2, setText2] = useState("");

    const onSubmitTrack = async (v) => {
        dispatch(fetchTrack({ title: v }));
    };

    const { track } = useSelector((state) => state.info);

    useEffect(() => {
        dispatch(fetchGetTrack());
    }, []);

    return (
        <>
            <ul className="border p-2 ml-2">
                {track &&
                    track.map((track) => (
                        <li key={track._id}>{track.title}</li>
                    ))}
            </ul>
            <div className="flex flex-col ml-2">
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
        </>
    );
};

export default CardTrack;
