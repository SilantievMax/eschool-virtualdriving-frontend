import React from 'react';
import AboutImages from '../../components/AboutImages/AboutImages';
import AboutText from '../../components/AboutText/AboutText';
import BackgroundForContents from '../../components/BackgroundForContents/BackgroundForContents'
import Footer from '../../components/Footer/Footer'

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