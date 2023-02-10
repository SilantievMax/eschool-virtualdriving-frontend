import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSetup } from "redux/features/dataSlice";
import Layout from "components/GeneralComponents/Layout/Layout";
import Footer from "components/GeneralComponents/Footer/Footer";
import { SetupElement } from "components/SetupsPageComponents/components/SetupElement";
import { SetupCarCard } from "components/SetupsPageComponents/components/SetupCarCard";

export const SetupElementPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSetup(id));
  }, [dispatch, id]);

  // TODO: bad layout
  return (
    <>
      <div className="flex-grow pt-14">
        <Layout>
          <SetupElement />
        </Layout>
        <SetupCarCard />
      </div>
      <Footer />
    </>
  );
};