import React from 'react';
import AboutImages from '../../components/AboutPageComponents/AboutImages/AboutImages';
import AboutText from '../../components/AboutPageComponents/AboutText/AboutText';
import BackgroundForContents from '../../components/GeneralComponents/BackgroundForContents/BackgroundForContents'
import Footer from '../../components/GeneralComponents/Footer/Footer'

const AboutPage = () => {
    return (
        <>
        <AboutImages />
        <BackgroundForContents>
            <AboutText />
            <Footer />
        </BackgroundForContents>
        </>
    )
}

export default AboutPage;