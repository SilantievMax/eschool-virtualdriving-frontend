import { useParams } from "react-router-dom";
import { SetupElement } from "../../components/SetupsPageComponents/components/SetupElement";
import Layout from "../../components/GeneralComponents/Layout/Layout";
import Footer from "../../components/GeneralComponents/Footer/Footer";
import { SetupCarCard } from "../../components/SetupsPageComponents/components/SetupCarCard";

export const SetupElementPage = () => {
  let params = useParams();

  // TODO: bad layout
  return (
    <>
      <div className="flex-grow">
        <Layout>
          <SetupElement id={params.id} />
        </Layout>
        <SetupCarCard id={params.id} />
      </div>
      <Footer />
    </>
  );
};
