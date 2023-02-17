import banner1 from 'assets/images/banner (1).webp'
import banner2 from 'assets/images/banner (2).webp'
import banner3 from 'assets/images/banner (3).webp'
import banner4 from 'assets/images/banner (4).webp'
import banner5 from 'assets/images/banner (5).webp'
import banner6 from 'assets/images/banner (6).webp'
import Footer from 'components/Generic/Footer/Footer'
import Layout from 'components/Generic/Layout/Layout'
import Banner from 'components/LiveriesPageComponents/Banner/Banner'
import Heading from 'components/LiveriesPageComponents/Heading/Heading'
import OrderForm from 'components/LiveriesPageComponents/OrderForm/OrderForm'
import React from 'react'

const LiveriesPage = () => {
  return (
    <>
      <Layout>
        <Heading />
        <OrderForm />
        <Banner banner={banner3} />
        <Banner banner={banner2} />
        <Banner banner={banner1} />
        <Banner banner={banner4} />
        <Banner banner={banner5} />
        <Banner banner={banner6} />
      </Layout>
      <Footer />
    </>
  )
}

export default LiveriesPage
