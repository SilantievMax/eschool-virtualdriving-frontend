import React from "react";
import Footer from "components/GeneralComponents/Footer/Footer";
import Layout from "components/GeneralComponents/Layout/Layout";
import BannerPersonalClasses from "components/PersonalClassesPageComponents/BannerPersonalClasses/BannerPersonalClasses";
import OrderForm from "components/PersonalClassesPageComponents/OrderForm/OrderForm";
import Text from "components/PersonalClassesPageComponents/Text/Text";

const PersonalClassesPage = () => {
  return (
    <>
      {/* <BannerPersonalClasses /> */}
      <Layout>
        <Text />
        <OrderForm />
      </Layout>
      <Footer />
    </>
  );
};

export default PersonalClassesPage;
