import React from "react";
import BackgroundForContents from "../../components/BackgroundForContents/BackgroundForContents";
import SwiperAvto from '../../components/ComponentsForMainPage/SwiperAvto/SwiperAvto';
import Services from '../../components/ComponentsForMainPage/Services/Services';
import BannerSimulators from "../../components/ComponentsForMainPage/BannerSimulators/BannerSimulators";
import BannerPartners from "../../components/ComponentsForMainPage/BannerPartners/BannerPartners";
import Footer from "../../components/Footer/Footer";
import BannerInstructors from "../../components/ComponentsForMainPage/BannerInstructors/BannerInstructors";
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
        <>
        <SwiperAvto />
        <BackgroundForContents>
            <Services />
            <BannerSimulators />
            <BannerInstructors />
            <BannerPartners />
            <Footer />
        </BackgroundForContents>
        <Outlet />
        </>
    )
}

export default MainPage;