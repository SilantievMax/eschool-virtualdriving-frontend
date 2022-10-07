import React from "react";
import BannerPersonalClasses from "../../components/ComponentsForPersonalClassesPage/BannerPersonalClasses/BannerPersonalClasses";
import InfoAboutClasses from "../../components/ComponentsForPersonalClassesPage/InfoAboutClasses/InfoAboutClasses";
import InfoAboutCoaches from "../../components/ComponentsForPersonalClassesPage/InfoAboutCoaches/InfoAboutCoaches";
import OrderForm from "../../components/ComponentsForPersonalClassesPage/OrderForm/OrderForm";
import StagesOfClasses from "../../components/ComponentsForPersonalClassesPage/StagesOfClasses/StagesOfClasses";
import Footer from "../../components/Footer/Footer"

const PersonalClassesPage = () => {
    return (
        <>
        <BannerPersonalClasses />
        {/* <InfoAboutClasses />
        <StagesOfClasses />
        <InfoAboutCoaches />
        <Footer /> */}
        <OrderForm />
        </>
    )
}

export default PersonalClassesPage;