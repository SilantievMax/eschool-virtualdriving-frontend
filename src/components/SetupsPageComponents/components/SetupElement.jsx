import { useState } from "react";
import { useSelector } from "react-redux";
import { accessUrl } from "../../../utils/axios";
import { SetupTable } from "./SetupTable";
import { formatPrice } from "./utils";
import { selectIsAuth } from "../../../redux/features/authSlice";
import AuthorizationModal from "../../GeneralComponents/AuthorizationModal/AuthorizationModal";
import { SetupOrderModal } from "./SetupOrderModal";

export const SetupElement = () => {
  const isAuth = useSelector(selectIsAuth);
  const [modalActive, setModalActive] = useState(false);
  const [modalBuyActive, setModalBuyActive] = useState(false);

  const { setup, status } = useSelector((state) => state.data);

  if (status === "loading") {
    return <div>Загрузка...</div>;
  } else if (status === "error") {
    return <div>Произошла ошибка загрузки элемента</div>;
  }

  const tableData = setup.tracksData || [];

  return (
    <>
      <h1 className="font-header text-6xl mb-10">{setup.name}</h1>

      <div className="flex items-start mb-16">
        <div className="w-1/3 shrink-0 mr-8">
          <div className="p-8">
            <img
              className="block object-scale-down"
              src={`${accessUrl}${setup.imgFile}`}
              alt=""
            />
          </div>

          <div className="p-8 bg-gray-100 flex justify-between items-center mt-10">
            <div className="text-2xl font-sans font-semibold">
              {formatPrice(setup.price)}
            </div>
            {!isAuth ? (
              <button
                type="button"
                className="bg-brand py-2.5 px-10 text-lg text-white"
                onClick={() => setModalActive(true)}
              >
                войти и купить
              </button>
            ) : (
              <button
                type="button"
                className="bg-brand py-2.5 px-10 text-lg text-white"
                onClick={() => setModalBuyActive(true)}
              >
                Заказать
              </button>
            )}
          </div>
        </div>
        <div className="flex-1 flex items-start">
          {!!tableData.length && (
            <>
              <div className="flex-1">
                <SetupTable data={tableData} />
              </div>
              <div className="shrink-0 w-16">
                <svg
                  className="w-full h-full text-brand"
                  viewBox="0 0 24 197"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.0694e-06 14.9307L4.28912e-06 32.7816L13.4572 41.2577L13.4572 27.3955L8.007 24.1152L13.4572 20.5786L13.4572 6.20693L5.0694e-06 14.9307ZM17.6625 3.48076L17.6625 17.8497L23.0319 14.3655L23.0319 0L17.6625 3.48076ZM17.6625 29.9266L17.6625 43.9064L23.0319 47.2884L23.0319 33.1584L17.6625 29.9266ZM13.4572 51.0567L3.49029e-06 51.0567L2.86029e-06 65.4693L13.4572 65.4693L13.4572 51.0567ZM17.6625 65.4693L17.6625 51.0567L23.0319 51.0567L23.0319 85.8165C23.0319 87.3865 22.7336 88.8623 22.137 90.2439C21.5718 91.6255 20.7711 92.8187 19.7349 93.8235C19.1157 94.4621 18.4249 95.0172 17.6625 95.4888L17.6625 78.2247C17.6939 77.9519 17.7096 77.6721 17.7096 77.3856L17.7096 65.4693L17.6625 65.4693ZM13.4572 83.5525C12.8093 83.7744 12.1073 83.8854 11.3511 83.8854C9.5299 83.8854 8.0227 83.226 6.8295 81.9072C5.6677 80.6198 5.0868 79.0812 5.0868 77.2914L5.0868 70.6503L2.83559e-06 66.0345L1.97089e-06 85.8165C1.90226e-06 87.3865 0.314003 88.8623 0.942003 90.2439C1.57 91.6255 2.4178 92.8187 3.4854 93.8235C4.553 94.8597 5.7933 95.6761 7.2063 96.2727C8.6193 96.8693 10.1265 97.1676 11.7279 97.1676C12.3216 97.1676 12.898 97.1266 13.4572 97.0446L13.4572 83.5525ZM13.4572 99.9273C12.8513 99.8317 12.2277 99.7838 11.5866 99.7838C9.9852 99.7838 8.478 100.082 7.065 100.679C5.652 101.307 4.4274 102.139 3.3912 103.175C2.355 104.243 1.5229 105.483 0.894902 106.896C0.298302 108.309 9.21836e-07 109.816 8.5181e-07 111.418L-4.69935e-07 141.656L5.0868 146.272L5.0868 121.497C5.0868 120.586 5.2438 119.739 5.5578 118.954C5.9032 118.169 6.3585 117.478 6.9237 116.881C7.5203 116.316 8.2111 115.861 8.9961 115.515C9.7811 115.17 10.6132 114.997 11.4924 114.997C12.1958 114.997 12.8507 115.094 13.4572 115.288L13.4572 99.9273ZM13.4572 120.918L13.4572 139.336L8.949 135.439L8.949 116.457L13.4572 120.918ZM13.4572 150.362L13.4572 176.241L13.4706 176.241L13.4706 190.123C13.4706 192.133 12.8583 193.781 11.6337 195.069C10.4091 196.356 8.7763 197 6.7353 197C4.6943 197 3.0615 196.356 1.8369 195.069C0.612298 193.781 -2.67635e-06 192.133 -2.58849e-06 190.123L-8.50879e-07 150.371L5.0868 154.94L5.0868 181.363C5.0868 181.959 5.2909 182.399 5.6991 182.682C6.1073 182.964 6.5469 183.106 7.0179 183.106C7.4889 183.106 7.9285 182.964 8.3367 182.682C8.7449 182.399 8.949 181.975 8.949 181.41L8.949 157.201C8.949 156.227 9.106 155.301 9.42 154.422C9.734 153.542 10.1893 152.773 10.7859 152.114C11.3825 151.454 12.1047 150.936 12.9525 150.559C13.116 150.487 13.2843 150.421 13.4572 150.362ZM17.6625 166.082L17.6625 150.152C19.0572 150.414 20.2032 151.005 21.1008 151.925C22.3882 153.213 23.0319 155.003 23.0319 157.295L23.0319 193.609L17.7096 188.569L17.7096 166.668C17.7096 166.458 17.6939 166.263 17.6625 166.082ZM17.6625 120.646L17.6625 101.533C18.4108 102.007 19.0859 102.554 19.6878 103.175C20.724 104.243 21.5404 105.483 22.137 106.896C22.7336 108.309 23.0319 109.816 23.0319 111.418L23.0319 146.224L17.7096 141.609L17.7096 121.497C17.7096 121.207 17.6939 120.923 17.6625 120.646Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex space-x-8 mb-16">
        <div className="flex-1 bg-gray-100 p-8 font-sans text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-brand/80 -mt-1"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8.7 3h6.6c.3 0 .5 .1 .7 .3l4.7 4.7c.2 .2 .3 .4 .3 .7v6.6c0 .3 -.1 .5 -.3 .7l-4.7 4.7c-.2 .2 -.4 .3 -.7 .3h-6.6c-.3 0 -.5 -.1 -.7 -.3l-4.7 -4.7c-.2 -.2 -.3 -.4 -.3 -.7v-6.6c0 -.3 .1 -.5 .3 -.7l4.7 -4.7c.2 -.2 .4 -.3 .7 -.3z" />
              <path d="M12 8l0 4" />
              <path d="M12 16l.01 0" />
            </svg>

            <span>Дополнительная информация по паку</span>
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Все сетапы находящиеся в продаже подготовлены под актуальный патч
              Assetto Corsa Competizione на PC
            </li>
            <li>
              Сетапы» VDES категорически запрещено свободно распространять 3м
              лицам, а так же перепродавать.
            </li>
            <li>
              Команда VDES оставляет за собой право отказать в обновлении
              сетапов а так же заблокировать на своих ресурсах в случае
              нарушений принципов сообщества и свободного распространения
              «сетапов»
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-gray-100 p-8 font-sans text-lg leading-relaxed">
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-brand/80 -mt-1"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 8h.01" />
              <path d="M11 12h1v4h1" />
              <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
            </svg>

            <span>
              Общая информация <span className="text-brand">{setup.name}</span>
            </span>
          </h2>
          <p>{setup.description || "Описание отсутсвует"}</p>
        </div>
      </div>
      {!isAuth && (
        <AuthorizationModal active={modalActive} setActive={setModalActive} />
      )}
      {isAuth && modalBuyActive && (
        <SetupOrderModal onClose={() => setModalBuyActive(false)} />
      )}
    </>
  );
};
