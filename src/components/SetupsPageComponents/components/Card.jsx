import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetcCardsSetop, fetcCars } from "../../../redux/features/dataSlice";

const Card = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetcCardsSetop());
    }, []);
    const { cardsSetup, status } = useSelector((state) => state.data);

    if (status === "loading") {
        return <div>Загрузк...</div>;
    }

    return (
        <ul className="flex flex-wrap">
            {cardsSetup.map((card) => (
                <li className=" flex flex-col items-center bg-slate-500 mx-2 p-3">
                    <img className=" w-52" src={card.accessLinkImg} alt="" />

                    <span>{card.name}</span>
                    <span>{card.price} руб.</span>
                    <button className=" bg-red-800 py-2 px-3 rounded">
                        Купить
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Card;
