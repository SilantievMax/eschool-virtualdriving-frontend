import React from "react";
import BackgroundForContents from "../../components/GeneralComponents/BackgroundForContents/BackgroundForContents";
import SwiperAvto from "../../components/MainPageComponents/SwiperAvto/SwiperAvto";
import Services from "../../components/MainPageComponents/Services/Services";
import BannerSimulators from "../../components/MainPageComponents/BannerSimulators/BannerSimulators";
import BannerPartners from "../../components/MainPageComponents/BannerPartners/BannerPartners";
import Footer from "../../components/GeneralComponents/Footer/Footer";
import BannerInstructors from "../../components/MainPageComponents/BannerInstructors/BannerInstructors";
import { Outlet } from "react-router-dom";
import Layout from "../../components/GeneralComponents/Layout/Layout";

const MainPage = () => {
  return (
    <>
      <Layout>
        <SwiperAvto />
        <Services />
        <BannerSimulators />
      </Layout>
      {/* <BannerInstructors /> */}
      <BannerPartners />
      <Footer />

      {/* <Outlet /> */}
    </>
  );
};

export default MainPage;
