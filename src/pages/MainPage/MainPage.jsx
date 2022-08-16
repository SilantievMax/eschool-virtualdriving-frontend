import React from "react";
import BackgroundForContents from "../../components/BackgroundForContents/BackgroundForContents";
import SwiperAvto from '../../components/SwiperAvto/SwiperAvto';
import Services from '../../components/Services/Services';
import Simulators from "../../components/Simulators/Simulators";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";
import Instructors from "../../components/Instructors/Instructors";
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
        <>
        <SwiperAvto />
        <BackgroundForContents>
            <Services />
            <Simulators />
            <Instructors />
            <Partners />
            <Footer />
        </BackgroundForContents>
        <Outlet />
        </>
    )
}

export default MainPage;