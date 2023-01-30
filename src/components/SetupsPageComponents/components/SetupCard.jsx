export const SetupCard = ({ name, price, imgSrc }) => {
  return (
    <li className=" flex flex-col items-center bg-slate-500 mx-2 p-3">
      <img className=" w-52" src={imgSrc} alt="" />

      <span>{name}</span>
      <span>{price} руб.</span>
      <button className=" bg-red-800 py-2 px-3 rounded">Купить</button>
    </li>
  );
};
