import React from "react";
import BackgroundForContents from "../../components/BackgroundForContents/BackgroundForContents";
import SwiperAvto from '../../components/SwiperAvto/SwiperAvto';
import Services from '../../components/Services/Services';

const MainPage = () => {
    return (
        <>
        <SwiperAvto />
        <BackgroundForContents>
            <Services />
        </BackgroundForContents>
        </>
    )
}

export default MainPage;