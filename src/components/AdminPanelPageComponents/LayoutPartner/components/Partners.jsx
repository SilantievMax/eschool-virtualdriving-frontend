import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetPartner, generalURLpartner } from "redux/features/partnerSlice";
import { accessUrl } from "utils/axios";

const Partners = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetPartner());
  }, []);

  const onSubmitGetLinkspartner = (id) => {
    dispatch(generalURLpartner(id));
  };

  const { partnerInfo } = useSelector((state) => state.partner);
  const link = useSelector((state) => state.partner.linkPartner);
  console.log(link);
  return (
    <>
      <table class="table-fixed ml-20">
        <thead>
          <tr>
            <th>Партнер</th>
            <th>Описание</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {partnerInfo &&
            partnerInfo.map((partner) => (
              <tr key={partner._id}>
                <td className="border border-slate-600">{partner.namePartner}</td>
                <td className="border border-slate-600">{partner.description}</td>
                <td className="border border-slate-600">{partner.status ? "активный" : "не активный"}</td>
                <td>
                  <button
                    onClick={() => {
                      onSubmitGetLinkspartner(partner._id);
                    }}
                    className=" bg-slate-600 m-2 px-2 py-1"
                  >
                    получить ссылку
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="mt-5">
        Партнерская ссылка:
        <small className="ml-2 mt-2">{link}</small>
      </div>
    </>
  );
};

export default Partners;
