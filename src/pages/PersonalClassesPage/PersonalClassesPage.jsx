import React from "react";
import BannerPersonalClasses from "../../components/PersonalClassesPageComponents/BannerPersonalClasses/BannerPersonalClasses";
import InfoAboutClasses from "../../components/PersonalClassesPageComponents/InfoAboutClasses/InfoAboutClasses";
import InfoAboutCoaches from "../../components/PersonalClassesPageComponents/InfoAboutCoaches/InfoAboutCoaches";
import OrderForm from "../../components/PersonalClassesPageComponents/OrderForm/OrderForm";
import StagesOfClasses from "../../components/PersonalClassesPageComponents/StagesOfClasses/StagesOfClasses";
import Footer from "../../components/GeneralComponents/Footer/Footer"

const PersonalClassesPage = () => {
    return (
        <>
        <BannerPersonalClasses />
        {/* <InfoAboutClasses />
        <StagesOfClasses />
        <InfoAboutCoaches /> */}
        <OrderForm />
        <Footer />
        </>
    )
}

export default PersonalClassesPage;