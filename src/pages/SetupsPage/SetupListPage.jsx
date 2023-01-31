import { SetupList } from "../../components/SetupsPageComponents/components/SetupList";
import Layout from "../../components/GeneralComponents/Layout/Layout";
import Footer from "../../components/GeneralComponents/Footer/Footer";

export const SetupListPage = () => {
  // TODO: bad layout
  return (
    <>
      <div className="flex-grow">
        <Layout>
          <SetupList />
        </Layout>
      </div>
      <Footer />
    </>
  );
};
