import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSetup } from "../../../redux/features/dataSlice";

export const SetupElement = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSetup(id));
  }, [dispatch, id]);

  const { setup, status } = useSelector((state) => state.data);

  if (status === "loading") {
    return <div>Загрузка...</div>;
  } else if (status === 'error') {
    return <div>Произошла ошибка загрузки элемента</div>;
	}

  return <div>{JSON.stringify(setup)}</div>;
};
