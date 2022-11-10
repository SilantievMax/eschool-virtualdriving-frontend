import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetcCardsSetop } from "../../../redux/features/ordersSetup";

const Card = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetcCardsSetop());
    }, []);
    const { cards, status } = useSelector((state) => state.setupCard);
    console.log(cards);

    if (status === "loading") {
        return <div>Загрузк...</div>;
    }

    return (
        <ul className="flex flex-wrap">
            {cards.map((card) => (
                <li className=" flex flex-col items-center bg-slate-500 mx-2 p-3">
                    <img className=" w-52" src={card.accessLinkImg} alt="" />

                    <span>{card.name}</span>
                    <span>{card.prise} руб.</span>
                    <button className=" bg-red-800 py-2 px-3 rounded">
                        Купить
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Card;
