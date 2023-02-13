import Footer from 'components/GeneralComponents/Footer/Footer'
import Layout from 'components/GeneralComponents/Layout/Layout'
import BannerInstructors from 'components/MainPageComponents/BannerInstructors/BannerInstructors'
import BannerPartners from 'components/MainPageComponents/BannerPartners/BannerPartners'
import BannerSimulators from 'components/MainPageComponents/BannerSimulators/BannerSimulators'
import Services from 'components/MainPageComponents/Services/Services'
import SwiperAvto from 'components/MainPageComponents/SwiperAvto/SwiperAvto'
import React from 'react'

const MainPage = () => {
  return (
    <>
      <Layout>
        <SwiperAvto />
        <Services />
        <BannerSimulators />
      </Layout>
      <BannerInstructors />
      {/* <BannerPartners /> */}
      <Footer />
    </>
  )
}

export default MainPage
