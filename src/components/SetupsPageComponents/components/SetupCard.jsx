import { formatPrice } from "./utils";

export const SetupCard = ({ name, price, imgSrc, onSubmit }) => {
  return (
    <div className="flex flex-col bg-[#EBEBF3] h-full">
      <div className="p-8 pb-0">
        <img className="block object-scale-down h-48" src={imgSrc} alt="" />
      </div>
      <div className="p-6 space-y-2 flex-1">
        <div className="font-header text-3xl">{name}</div>
      </div>
      <div className="p-6 pt-0 flex justify-between items-center">
        <div className="text-2xl font-sans font-semibold">
          {formatPrice(price)}
        </div>
        <button
          type="button"
          className=" bg-brand py-2.5 px-5 text-white"
          onClick={onSubmit}
        >
          купить
        </button>
      </div>
    </div>
  );
};
