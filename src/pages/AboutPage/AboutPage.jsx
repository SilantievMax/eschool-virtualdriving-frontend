import AboutImages from 'components/AboutPageComponents/AboutImages/AboutImages'
import AboutText from 'components/AboutPageComponents/AboutText/AboutText'
import BackgroundForContents from 'components/Generic/BackgroundForContents/BackgroundForContents'
import Footer from 'components/Generic/Footer/Footer'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <AboutImages />
      <BackgroundForContents>
        <AboutText />
      </BackgroundForContents>
      <Footer />
    </>
  )
}

export default AboutPage
