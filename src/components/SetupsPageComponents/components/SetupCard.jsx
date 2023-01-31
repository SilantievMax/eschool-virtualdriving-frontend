export const SetupCard = ({ name, price, imgSrc, onSubmit }) => {
  return (
    <div className="flex flex-col bg-[#EBEBF3] h-full">
      <div className="p-8 pb-0">
        <img className="block object-scale-down h-48" src={imgSrc} alt="" />
      </div>
      <div className="p-6 space-y-2 flex-1">
        <div class="font-header text-2xl">{name}</div>
        <div class="text-lg text-gray-600">{price} руб.</div>
      </div>
      <div className="p-6 pt-0">
        <button
          type="button"
          className=" bg-[#e61f26] py-2.5 px-5 text-white"
          onClick={onSubmit}
        >
          купить
        </button>
      </div>
    </div>
  );
};
