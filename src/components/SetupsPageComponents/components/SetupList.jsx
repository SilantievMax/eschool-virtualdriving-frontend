import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetcCardsSetop } from "../../../redux/features/dataSlice";
import { accessUrl } from "../../../utils/axios";
import { SetupCard } from "./SetupCard";

export const SetupList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetcCardsSetop());
  }, [dispatch]);

  const { cardsSetup, status } = useSelector((state) => state.data);

  if (status === "loading") {
    return <div>Загрузка...</div>;
  }

  return (
    <ul className="flex flex-wrap">
      {cardsSetup.map((card) => (
        <SetupCard
          key={card._id}
          name={card.name}
          price={card.price}
          imgSrc={`${accessUrl}${card.imgFile}`}
        />
      ))}
    </ul>
  );
};
