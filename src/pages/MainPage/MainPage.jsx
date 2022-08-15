import React from "react";
import BackgroundForContents from "../../components/BackgroundForContents/BackgroundForContents";
import SwiperAvto from '../../components/SwiperAvto/SwiperAvto';
import Services from '../../components/Services/Services';
import Simulators from "../../components/Simulators/Simulators";

const MainPage = () => {
    return (
        <>
        <SwiperAvto />
        <BackgroundForContents>
            <Services />
            <Simulators />
        </BackgroundForContents>
        </>
    )
}

export default MainPage;