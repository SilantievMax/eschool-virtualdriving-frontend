import React from "react";
import BackgroundForContents from "../../components/BackgroundForContents/BackgroundForContents";
import SwiperAvto from '../../components/SwiperAvto/SwiperAvto';
import Services from '../../components/Services/Services';
import Simulators from "../../components/Simulators/Simulators";
import Partners from "../../components/Partners/Partners";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
    return (
        <>
        <SwiperAvto />
        <BackgroundForContents>
            <Services />
            <Simulators />
            ______________
            <Partners />
            <Footer />
        </BackgroundForContents>
        </>
    )
}

export default MainPage;