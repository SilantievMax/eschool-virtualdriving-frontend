import { useParams } from "react-router-dom";
import { SetupElement } from "../../components/SetupsPageComponents/components/SetupElement";
import Layout from "../../components/GeneralComponents/Layout/Layout";
// import Footer from "../../components/GeneralComponents/Footer/Footer";

export const SetupElementPage = () => {
  let params = useParams();

  return (
    <>
      <Layout>
        <SetupElement id={params.id} />
      </Layout>
      {/* <Footer /> */}
    </>
  );
};
